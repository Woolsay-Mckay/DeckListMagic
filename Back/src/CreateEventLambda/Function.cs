using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DocumentModel;
using Amazon.DynamoDBv2.Model;
using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;
using DeckList.Commons;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace CreateEventLambda
{
    public class Function
    {
        public MagicEvent FunctionHandler(AwsPostRequest<MagicEvent> request, ILambdaContext context)
        {
            var magicEvent = request.body;
            context.Logger.LogLine($"Beginning to register {magicEvent.EventName} Event.");

            var userUid = request.context.userId;
            using var client = new AmazonDynamoDBClient(Amazon.RegionEndpoint.EUWest1);

            Table deckListTable = Table.LoadTable(client, Constantes.TableName);
            var batchWrite = deckListTable.CreateBatchWrite();

            Guid eventUid = Guid.NewGuid();
            Guid tournamentUid;
            string registerCode;
            bool find = false;
            do
            {
                tournamentUid = Guid.NewGuid();
                registerCode = tournamentUid.ToString().Substring(0, 8);
                QueryRequest req = new QueryRequest
                {
                    TableName = Constantes.TableName,
                    IndexName = Constantes.TableIndex.REGISTER_CODE,
                    KeyConditionExpression = $"{Constantes.DynamoCol.REGISTER_CODE} = :v_registerCode",
                    ExpressionAttributeValues = new Dictionary<string, AttributeValue> {
                        {":v_registerCode", new AttributeValue {
                            S = registerCode
                        }}
                        }
                };
                Task<QueryResponse> search = client.QueryAsync(req);
                search.Wait();
                find = search.Result.Count != 0;
            } while (find);


            var evenement = new Document
            {
                [Constantes.DynamoCol.PK] = $"{Constantes.DynamoKey.EVENT}{eventUid}",
                [Constantes.DynamoCol.SK] = $"{Constantes.DynamoKey.EVENT}{eventUid}#{Constantes.DynamoKey.TOURNAMENT}{tournamentUid}",
                [Constantes.DynamoCol.EVENT_ID] = $"{eventUid}",
                [Constantes.DynamoCol.TOURNAMENT_ID] = $"{tournamentUid}",
                [Constantes.DynamoCol.EVENT_NAME] = magicEvent.EventName,
                [Constantes.DynamoCol.TOURNAMENT_NAME] = magicEvent.TournamentName,
                [Constantes.DynamoCol.DATE] = magicEvent.Date,
                [Constantes.DynamoCol.FORMAT] = magicEvent.Format,
                [Constantes.DynamoCol.REGISTER_CODE] = registerCode,
            };

            magicEvent.EventId = eventUid.ToString();
            magicEvent.TournamentId = tournamentUid.ToString();
            magicEvent.RegisterCode = registerCode;

            var evenementTo = new Document
            {
                [Constantes.DynamoCol.PK] = $"TO#{userUid}",
                [Constantes.DynamoCol.SK] = $"EVENT#{eventUid}",
                [Constantes.DynamoCol.EVENT_ID] = $"{eventUid}",
                [Constantes.DynamoCol.USER_ID] = $"{userUid}"
            };

            batchWrite.AddDocumentToPut(evenement);
            batchWrite.AddDocumentToPut(evenementTo);

            var batch = batchWrite.ExecuteAsync();
            batch.Wait();

            context.Logger.LogLine("Stream processing complete.");

            var headersDic = new Dictionary<string, string> { { "Content-type", "application/json" } };

            return magicEvent;
            //return new APIGatewayProxyResponse()
            //{
            //    StatusCode = 201,
            //    Headers = headersDic,
            //    // return the image in Base64 encoding
            //    Body = JsonConvert.SerializeObject(magicEvent) //Convert.ToBase64String(reader.ReadBytes(Convert.ToInt32(responseStream.Length))),
            //};
        }
    }
}