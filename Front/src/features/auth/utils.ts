import { CognitoUser, Error } from 'features/auth/types';
import { AWSErrorCode } from 'features/auth/enums';

const DEFAULT_ISSUER = 'DeckList';

export const buildOtpAuthPath = ({
  user,
  issuer = DEFAULT_ISSUER,
  secretKey,
}: {
  user: CognitoUser;
  issuer?: string;
  secretKey: string;
}) => `otpauth://totp/${user.username}?secret=${secretKey}&issuer=${issuer}`;

export function HandleAWSErrorMessage(error: Error | undefined): string {
  if (!error) {
    return '';
  }

  switch (error.code) {
    case AWSErrorCode.INVALID_PARAMETER_EXCEPTION:
      return `2 erreurs de validation détectées : Votre code utilisateur doit respecter les règles suivantes : longueur inférieure ou égale à 6 caractères et seuls les caractères alphanumériques sont autorisés ( pas de caractères spéciaux tels que : ! # @ ...) `;
    default:
      return error.message;
  }
}
