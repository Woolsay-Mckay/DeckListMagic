import React from 'react';

interface Props {
  width: string;
  height?: string;
  className?: any;
}

export function AppStoreButton(props: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 40" {...props}>
      <path
        fill="#A6A6A6"
        d="M130.197 40H4.729A4.74 4.74 0 010 35.267V4.726A4.733 4.733 0 014.729 0h125.468C132.803 0 135 2.12 135 4.726v30.541c0 2.605-2.197 4.733-4.803 4.733z"
      ></path>
      <path d="M134.032 35.268a3.83 3.83 0 01-3.834 3.83H4.729a3.835 3.835 0 01-3.839-3.83V4.725A3.84 3.84 0 014.729.89h125.468a3.834 3.834 0 013.834 3.835l.001 30.543z"></path>
      <path
        fill="#FFF"
        d="M30.128 19.784c-.029-3.223 2.639-4.791 2.761-4.864-1.511-2.203-3.853-2.504-4.676-2.528-1.967-.207-3.875 1.177-4.877 1.177-1.022 0-2.565-1.157-4.228-1.123-2.14.033-4.142 1.272-5.24 3.196-2.266 3.923-.576 9.688 1.595 12.859 1.086 1.553 2.355 3.287 4.016 3.226 1.625-.067 2.232-1.036 4.193-1.036 1.943 0 2.513 1.036 4.207.997 1.744-.028 2.842-1.56 3.89-3.127 1.255-1.78 1.759-3.533 1.779-3.623-.041-.014-3.387-1.291-3.42-5.154zm-3.2-9.478c.874-1.093 1.472-2.58 1.306-4.089-1.265.056-2.847.875-3.758 1.944-.806.942-1.526 2.486-1.34 3.938 1.421.106 2.88-.717 3.792-1.793zM53.645 31.504h-2.271l-1.244-3.909h-4.324l-1.185 3.909H42.41l4.284-13.308h2.646l4.305 13.308zm-3.89-5.549L48.63 22.48c-.119-.355-.342-1.191-.671-2.507h-.04a96.75 96.75 0 01-.632 2.507l-1.105 3.475h3.573zm14.907.633c0 1.632-.441 2.922-1.323 3.869-.79.843-1.771 1.264-2.942 1.264-1.264 0-2.172-.454-2.725-1.362h-.04v5.055H55.5V25.067c0-1.026-.027-2.079-.079-3.159h1.875l.119 1.521h.04c.711-1.146 1.79-1.718 3.238-1.718 1.132 0 2.077.447 2.833 1.342.758.896 1.136 2.074 1.136 3.535zm-2.172.078c0-.934-.21-1.704-.632-2.31-.461-.632-1.08-.948-1.856-.948-.526 0-1.004.176-1.431.523-.428.35-.708.807-.839 1.373-.066.264-.099.48-.099.65v1.6c0 .698.214 1.287.642 1.768s.984.721 1.668.721c.803 0 1.428-.31 1.875-.928.448-.619.672-1.435.672-2.449zm13.209-.078c0 1.632-.441 2.922-1.324 3.869-.789.843-1.77 1.264-2.941 1.264-1.264 0-2.172-.454-2.724-1.362h-.04v5.055h-2.132V25.067c0-1.026-.027-2.079-.079-3.159h1.875l.119 1.521h.04c.71-1.146 1.789-1.718 3.238-1.718 1.131 0 2.076.447 2.834 1.342.755.896 1.134 2.074 1.134 3.535zm-2.172.078c0-.934-.211-1.704-.633-2.31-.461-.632-1.078-.948-1.855-.948a2.22 2.22 0 00-1.432.523c-.428.35-.707.807-.838 1.373-.065.264-.099.48-.099.65v1.6c0 .698.214 1.287.64 1.768.428.48.984.721 1.67.721.803 0 1.428-.31 1.875-.928.448-.619.672-1.435.672-2.449zm14.512 1.106c0 1.132-.393 2.053-1.182 2.764-.867.777-2.074 1.165-3.625 1.165-1.432 0-2.58-.276-3.449-.829l.494-1.777c.936.566 1.963.85 3.082.85.803 0 1.428-.182 1.877-.544.447-.362.67-.848.67-1.454 0-.54-.184-.995-.553-1.364-.367-.369-.98-.712-1.836-1.029-2.33-.869-3.494-2.142-3.494-3.816 0-1.094.408-1.991 1.225-2.689.814-.699 1.9-1.048 3.258-1.048 1.211 0 2.217.211 3.02.632l-.533 1.738c-.75-.408-1.598-.612-2.547-.612-.75 0-1.336.185-1.756.553a1.58 1.58 0 00-.533 1.205c0 .526.203.961.611 1.303.355.316 1 .658 1.936 1.027 1.145.461 1.986 1 2.527 1.618.539.616.808 1.387.808 2.307zm7.049-4.264h-2.35v4.659c0 1.185.414 1.777 1.244 1.777.381 0 .697-.033.947-.099l.059 1.619c-.42.157-.973.236-1.658.236-.842 0-1.5-.257-1.975-.77-.473-.514-.711-1.376-.711-2.587v-4.837h-1.4v-1.6h1.4v-1.757l2.094-.632v2.389h2.35v1.602zm10.603 3.119c0 1.475-.422 2.686-1.264 3.633-.883.975-2.055 1.461-3.516 1.461-1.408 0-2.529-.467-3.365-1.401s-1.254-2.113-1.254-3.534c0-1.487.43-2.705 1.293-3.652.861-.948 2.023-1.422 3.484-1.422 1.408 0 2.541.467 3.396 1.402.818.907 1.226 2.078 1.226 3.513zm-2.212.069c0-.885-.189-1.644-.572-2.277-.447-.766-1.086-1.148-1.914-1.148-.857 0-1.508.383-1.955 1.148-.383.634-.572 1.405-.572 2.317 0 .885.189 1.644.572 2.276.461.766 1.105 1.148 1.936 1.148.814 0 1.453-.39 1.914-1.168.393-.645.591-1.412.591-2.296zm9.142-2.913a3.702 3.702 0 00-.672-.059c-.75 0-1.33.283-1.738.85-.355.5-.533 1.132-.533 1.895v5.035h-2.131l.02-6.574c0-1.106-.027-2.113-.08-3.021h1.857l.078 1.836h.059c.225-.631.58-1.139 1.066-1.52a2.578 2.578 0 011.541-.514c.197 0 .375.014.533.039v2.033zm9.535 2.469a5 5 0 01-.078.967h-6.396c.025.948.334 1.673.928 2.173.539.447 1.236.671 2.092.671.947 0 1.811-.151 2.588-.454l.334 1.48c-.908.396-1.98.593-3.217.593-1.488 0-2.656-.438-3.506-1.313-.848-.875-1.273-2.05-1.273-3.524 0-1.447.395-2.652 1.186-3.613.828-1.026 1.947-1.539 3.355-1.539 1.383 0 2.43.513 3.141 1.539.563.815.846 1.823.846 3.02zm-2.033-.553c.014-.632-.125-1.178-.414-1.639-.369-.593-.936-.889-1.699-.889-.697 0-1.264.289-1.697.869-.355.461-.566 1.014-.631 1.658h4.441zM49.05 10.009c0 1.177-.353 2.063-1.058 2.658-.653.549-1.581.824-2.783.824-.596 0-1.106-.026-1.533-.078V6.982c.557-.09 1.157-.136 1.805-.136 1.145 0 2.008.249 2.59.747.652.563.979 1.368.979 2.416zm-1.105.029c0-.763-.202-1.348-.606-1.756-.404-.407-.994-.611-1.771-.611-.33 0-.611.022-.844.068v4.889c.129.02.365.029.708.029.802 0 1.421-.223 1.857-.669s.656-1.096.656-1.95zm6.964.999c0 .725-.207 1.319-.621 1.785-.434.479-1.009.718-1.727.718-.692 0-1.243-.229-1.654-.689-.41-.459-.615-1.038-.615-1.736 0-.73.211-1.329.635-1.794s.994-.698 1.712-.698c.692 0 1.248.229 1.669.688.4.446.601 1.022.601 1.726zm-1.087.034c0-.435-.094-.808-.281-1.119-.22-.376-.533-.564-.94-.564-.421 0-.741.188-.961.564-.188.311-.281.69-.281 1.138 0 .435.094.808.281 1.119.227.376.543.564.951.564.4 0 .714-.191.94-.574.194-.317.291-.693.291-1.128zm8.943-2.352l-1.475 4.714h-.96l-.611-2.047a15.32 15.32 0 01-.379-1.523h-.019a11.15 11.15 0 01-.379 1.523l-.649 2.047h-.971l-1.387-4.714h1.077l.533 2.241c.129.53.235 1.035.32 1.513h.019c.078-.394.207-.896.389-1.503l.669-2.25h.854l.641 2.202c.155.537.281 1.054.378 1.552h.029c.071-.485.178-1.002.32-1.552l.572-2.202h1.029zm5.433 4.714H67.15v-2.7c0-.832-.316-1.248-.95-1.248a.946.946 0 00-.757.343 1.217 1.217 0 00-.291.808v2.796h-1.048v-3.366c0-.414-.013-.863-.038-1.349h.921l.049.737h.029c.122-.229.304-.418.543-.569.284-.176.602-.265.95-.265.44 0 .806.142 1.097.427.362.349.543.87.543 1.562v2.824zm2.89 0h-1.047V6.556h1.047v6.877zm6.17-2.396c0 .725-.207 1.319-.621 1.785-.434.479-1.01.718-1.727.718-.693 0-1.244-.229-1.654-.689-.41-.459-.615-1.038-.615-1.736 0-.73.211-1.329.635-1.794s.994-.698 1.711-.698c.693 0 1.248.229 1.67.688.4.446.601 1.022.601 1.726zm-1.088.034c0-.435-.094-.808-.281-1.119-.219-.376-.533-.564-.939-.564-.422 0-.742.188-.961.564-.188.311-.281.69-.281 1.138 0 .435.094.808.281 1.119.227.376.543.564.951.564.4 0 .713-.191.939-.574.195-.317.291-.693.291-1.128zm6.16 2.362h-.941l-.078-.543h-.029c-.322.433-.781.65-1.377.65-.445 0-.805-.143-1.076-.427a1.339 1.339 0 01-.369-.96c0-.576.24-1.015.723-1.319.482-.304 1.16-.453 2.033-.446V10.3c0-.621-.326-.931-.979-.931-.465 0-.875.117-1.229.349l-.213-.688c.438-.271.979-.407 1.617-.407 1.232 0 1.85.65 1.85 1.95v1.736c0 .471.023.846.068 1.124zm-1.088-1.62v-.727c-1.156-.02-1.734.297-1.734.95 0 .246.066.43.201.553a.733.733 0 00.512.184c.23 0 .445-.073.641-.218a.893.893 0 00.38-.742zm7.043 1.62h-.93l-.049-.757h-.029c-.297.576-.803.864-1.514.864-.568 0-1.041-.223-1.416-.669s-.562-1.025-.562-1.736c0-.763.203-1.381.611-1.853.395-.44.879-.66 1.455-.66.633 0 1.076.213 1.328.64h.02V6.556h1.049v5.607c0 .459.012.882.037 1.27zm-1.086-1.988v-.786a1.194 1.194 0 00-.408-.965 1.03 1.03 0 00-.701-.257c-.391 0-.697.155-.922.466-.223.311-.336.708-.336 1.193 0 .466.107.844.322 1.135.227.31.533.465.916.465.344 0 .619-.129.828-.388.202-.239.301-.527.301-.863zm10.049-.408c0 .725-.207 1.319-.621 1.785-.434.479-1.008.718-1.727.718-.691 0-1.242-.229-1.654-.689-.41-.459-.615-1.038-.615-1.736 0-.73.211-1.329.635-1.794s.994-.698 1.713-.698c.691 0 1.248.229 1.668.688.4.446.601 1.022.601 1.726zm-1.086.034c0-.435-.094-.808-.281-1.119-.221-.376-.533-.564-.941-.564-.42 0-.74.188-.961.564-.188.311-.281.69-.281 1.138 0 .435.094.808.281 1.119.227.376.543.564.951.564.4 0 .715-.191.941-.574.193-.317.291-.693.291-1.128zm6.721 2.362h-1.047v-2.7c0-.832-.316-1.248-.951-1.248-.311 0-.562.114-.756.343s-.291.499-.291.808v2.796h-1.049v-3.366c0-.414-.012-.863-.037-1.349h.92l.049.737h.029a1.53 1.53 0 01.543-.569c.285-.176.602-.265.951-.265.439 0 .805.142 1.096.427.363.349.543.87.543 1.562v2.824zm7.053-3.929h-1.154v2.29c0 .582.205.873.611.873.188 0 .344-.016.467-.049l.027.795c-.207.078-.479.117-.814.117-.414 0-.736-.126-.969-.378-.234-.252-.35-.676-.35-1.271V9.504h-.689v-.785h.689v-.864l1.027-.31v1.173h1.154v.786zm5.548 3.929h-1.049v-2.68c0-.845-.316-1.268-.949-1.268-.486 0-.818.245-1 .735a1.317 1.317 0 00-.049.377v2.835h-1.047V6.556h1.047v2.841h.02c.33-.517.803-.775 1.416-.775.434 0 .793.142 1.078.427.355.355.533.883.533 1.581v2.803zm5.723-2.58c0 .188-.014.346-.039.475h-3.143c.014.466.164.821.455 1.067.266.22.609.33 1.029.33.465 0 .889-.074 1.271-.223l.164.728c-.447.194-.973.291-1.582.291-.73 0-1.305-.215-1.721-.645-.418-.43-.625-1.007-.625-1.731 0-.711.193-1.303.582-1.775.406-.504.955-.756 1.648-.756.678 0 1.193.252 1.541.756.281.4.42.895.42 1.483zm-1-.271a1.411 1.411 0 00-.203-.805c-.182-.291-.459-.437-.834-.437a.995.995 0 00-.834.427 1.586 1.586 0 00-.311.815h2.182z"
      ></path>
    </svg>
  );
}

export function PlayStoreButton(props: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5435.8 1604" {...props}>
      <path
        fillRule="evenodd"
        d="M5234.4 1604h-5033C90.4 1604 0 1513.6 0 1403.5v-1203C0 90 90.4 0 201.4 0h5033c110.9 0 201.4 90 201.4 200.5v1203c0 110.1-90.5 200.5-201.4 200.5z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#a6a6a6"
        fillRule="evenodd"
        d="M5234.4 32.1c93.1 0 169.3 75.7 169.3 168.4v1203c0 92.7-75.7 168.4-169.3 168.4h-5033c-93.1 0-169.3-75.7-169.3-168.4v-1203c0-92.7 75.7-168.4 169.3-168.4h5033zm0-32.1h-5033C90.4 0 0 90.4 0 200.5v1203C0 1514 90.4 1604 201.4 1604h5033c110.9 0 201.4-90 201.4-200.5v-1203C5435.8 90.4 5345.3 0 5234.4 0z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#fff"
        d="M2863.6 530.6c-36.3 0-66.9-12.7-91.1-37.7-24-24.3-37.4-57.8-36.8-92 0-36.5 12.4-67.4 36.8-91.9 24.1-25 54.7-37.7 91-37.7 35.9 0 66.5 12.7 91.1 37.7 24.4 25.3 36.8 56.2 36.8 91.9-.4 36.6-12.8 67.5-36.8 91.9-24.1 25.2-54.7 37.8-91 37.8zm-1080.1 0c-35.5 0-66.3-12.5-91.5-37.2-25-24.6-37.7-55.7-37.7-92.4s12.7-67.8 37.7-92.4c24.7-24.7 55.5-37.2 91.5-37.2 17.6 0 34.7 3.5 51.1 10.6 16.1 6.9 29.2 16.3 38.9 27.8l2.4 2.9-27.1 26.6-2.8-3.3c-15.3-18.2-35.8-27.1-62.9-27.1-24.2 0-45.3 8.6-62.7 25.6-17.5 17.1-26.4 39.5-26.4 66.6s8.9 49.5 26.4 66.6c17.4 17 38.5 25.6 62.7 25.6 25.8 0 47.5-8.6 64.4-25.6 10-10 16.2-24 18.4-41.7H1779v-37.4h124.2l.5 3.4c.9 6.3 1.8 12.8 1.8 18.8 0 34.5-10.4 62.4-31 83-23.4 24.4-54 36.8-91 36.8zm1436.1-5.3h-38.3L3064 337.6l1 33.8v153.8h-38.3V276.7h43.7l1.2 1.9 110.3 176.8-1-33.7v-145h38.7v248.6zm-643.8 0H2537V314.1h-67.3v-37.4H2643v37.4h-67.3v211.2zm-137.7 0h-38.7V276.7h38.7v248.6zm-217.5 0h-38.7V314.1h-67.3v-37.4h173.3v37.4h-67.3v211.2zm-130.5-.4h-148.4V276.7h148.4v37.4h-109.6v68.2h98.9v37h-98.9v68.2h109.6v37.4zm710.8-57.7c17.3 17.3 38.3 26 62.7 26 25.1 0 45.6-8.5 62.7-26 17-17 25.6-39.3 25.6-66.2s-8.6-49.3-25.5-66.2c-17.3-17.3-38.4-26-62.7-26-25.1 0-45.6 8.5-62.6 26-17 17-25.6 39.3-25.6 66.2s8.5 49.3 25.4 66.2z"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M2732.1 872.4c-94.5 0-171.1 71.7-171.1 170.6 0 98 77.1 170.6 171.1 170.6 94.5 0 171.1-72.2 171.1-170.6 0-98.9-76.6-170.6-171.1-170.6zm0 273.6c-51.7 0-96.2-42.8-96.2-103.4 0-61.5 44.6-103.4 96.2-103.4 51.7 0 96.2 41.9 96.2 103.4.1 61-44.5 103.4-96.2 103.4zm-373.3-273.6c-94.5 0-171.1 71.7-171.1 170.6 0 98 77.1 170.6 171.1 170.6 94.5 0 171.1-72.2 171.1-170.6 0-98.9-76.7-170.6-171.1-170.6zm0 273.6c-51.7 0-96.2-42.8-96.2-103.4 0-61.5 44.6-103.4 96.2-103.4 51.7 0 96.2 41.9 96.2 103.4 0 61-44.5 103.4-96.2 103.4zm-444.2-221.5v72.2h173.3c-5.3 40.5-18.7 70.4-39.2 90.9-25.4 25.4-64.6 53-133.7 53-106.5 0-189.8-86-189.8-192.5s83.3-192.5 189.8-192.5c57.5 0 99.4 22.7 130.5 51.7l51.2-51.2c-43.2-41.4-100.7-73.1-181.3-73.1-146.1 0-268.7 119-268.7 264.7 0 146.1 122.5 264.7 268.7 264.7 78.9 0 138.1-25.8 184.9-74.4 47.7-47.7 62.8-115 62.8-169.3 0-16.9-1.3-32.1-4-45h-244.6c.1-.1.1.8.1.8zm1816.9 56.2C3717.2 942.4 3674 872 3585.4 872c-87.8 0-160.8 69.1-160.8 170.6 0 95.8 72.2 170.6 169.3 170.6 78 0 123.4-47.7 142.1-75.7l-57.9-38.8c-19.2 28.5-45.9 47.2-83.8 47.2-38.3 0-65.1-17.4-82.9-51.7l228.1-94.5c0 .1-8-19-8-19zm-232.6 57c-1.8-65.9 51.2-99.4 89.1-99.4 29.9 0 54.8 14.7 63.3 36.1l-152.4 63.3zM3313.6 1203h74.9V701.8h-74.9V1203zm-123-292.7h-2.7c-16.9-20.1-49-38.3-90-38.3-85.1 0-163.5 74.9-163.5 171.1 0 95.8 78 169.8 163.5 169.8 40.5 0 73.1-18.3 90-38.8h2.7v24.5c0 65.1-34.8 100.2-90.9 100.2-45.9 0-74.4-33-86-60.6l-65.1 27.2c18.7 45 68.6 100.7 151 100.7 87.8 0 162.2-51.7 162.2-177.8V882.2H3191v28.1h-.4zm-86 235.7c-51.7 0-94.9-43.2-94.9-102.9 0-60.2 43.2-103.8 94.9-103.8 51.2 0 90.9 44.1 90.9 103.8.5 59.7-39.6 102.9-90.9 102.9zm977.6-444.2h-179.1V1203h74.9v-189.8h104.3c82.9 0 164.4-60.1 164.4-155.5s-81.2-155.9-164.5-155.9zm2.2 241.4h-106.5v-172h106.5c56.1 0 87.8 46.3 87.8 86 0 39.3-32.1 86-87.8 86zm462.5-71.7c-54.4 0-110.5 24.1-133.7 76.6l66.4 27.6c14.3-27.6 40.5-37 68.2-37 38.8 0 78 23.2 78.9 64.6v5.3c-13.4-7.6-42.8-19.2-78-19.2-71.7 0-144.4 39.2-144.4 112.7 0 67.3 58.8 110.5 124.3 110.5 50.3 0 78-22.7 95.3-49h2.7v38.8h72.2v-192c0-89.4-66.4-138.9-151.9-138.9zm-9.4 274.5c-24.5 0-58.8-12-58.8-42.8 0-38.8 42.8-53.5 79.3-53.5 33 0 48.6 7.1 68.2 16.9-5.4 45-43.4 79-88.7 79.4zm424.7-263.8l-86 217.4h-2.7l-89.1-217.4h-80.6l133.7 303.9-76.2 168.9h78L5045 882.2h-82.8zM4288 1203h74.9V701.8H4288V1203z"
        clipRule="evenodd"
      ></path>
      <linearGradient
        id="a"
        x1="1682.108"
        x2="1624.292"
        y1="1339.478"
        y2="1309.634"
        gradientTransform="matrix(11.64 0 0 -22.55 -18705.596 30554.37)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#00a0ff"></stop>
        <stop offset="0.007" stopColor="#00a1ff"></stop>
        <stop offset="0.26" stopColor="#00beff"></stop>
        <stop offset="0.512" stopColor="#00d2ff"></stop>
        <stop offset="0.76" stopColor="#00dfff"></stop>
        <stop offset="1" stopColor="#00e3ff"></stop>
      </linearGradient>
      <path
        fill="url(#a)"
        fillRule="evenodd"
        d="M418.4 302.1c-11.6 12.5-18.3 31.6-18.3 56.6v886.7c0 25 6.7 44.1 18.7 56.1l3.1 2.7 496.8-496.8v-11.1L421.5 299.4l-3.1 2.7z"
        clipRule="evenodd"
      ></path>
      <linearGradient
        id="b"
        x1="1712.662"
        x2="1606.561"
        y1="1274.838"
        y2="1274.838"
        gradientTransform="matrix(9.145 0 0 -7.7 -14305.538 10618.251)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ffe000"></stop>
        <stop offset="0.409" stopColor="#ffbd00"></stop>
        <stop offset="0.775" stopColor="orange"></stop>
        <stop offset="1" stopColor="#ff9c00"></stop>
      </linearGradient>
      <path
        fill="url(#b)"
        fillRule="evenodd"
        d="M1084 973.5L918.3 807.8v-11.6L1084 630.5l3.6 2.2 196 111.4c56.1 31.6 56.1 83.8 0 115.8l-196 111.4-3.6 2.2z"
        clipRule="evenodd"
      ></path>
      <linearGradient
        id="c"
        x1="1707.441"
        x2="1646.682"
        y1="1290.047"
        y2="1211.223"
        gradientTransform="matrix(15.02 0 0 -11.5775 -24650.229 15829.648)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ff3a44"></stop>
        <stop offset="1" stopColor="#c31162"></stop>
      </linearGradient>
      <path
        fill="url(#c)"
        fillRule="evenodd"
        d="M1087.6 971.3L918.3 802l-499.9 499.9c18.3 19.6 49 21.8 83.3 2.7l585.9-333.3"
        clipRule="evenodd"
      ></path>
      <linearGradient
        id="d"
        x1="1660.636"
        x2="1687.767"
        y1="1365.668"
        y2="1330.45"
        gradientTransform="matrix(15.02 0 0 -11.5715 -24650.229 15809.992)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#32a071"></stop>
        <stop offset="0.069" stopColor="#2da771"></stop>
        <stop offset="0.476" stopColor="#15cf74"></stop>
        <stop offset="0.801" stopColor="#06e775"></stop>
        <stop offset="1" stopColor="#00f076"></stop>
      </linearGradient>
      <path
        fill="url(#d)"
        fillRule="evenodd"
        d="M1087.6 632.7L501.7 299.9c-34.3-19.6-65.1-16.9-83.3 2.7L918.3 802l169.3-169.3z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        d="M1084 967.7l-581.9 330.6c-32.5 18.7-61.5 17.4-80.2.4l-3.1 3.1 3.1 2.7c18.7 16.9 47.7 18.3 80.2-.4L1088 971.3l-4-3.6z"
        clipRule="evenodd"
        opacity="0.2"
      ></path>
      <path
        fillRule="evenodd"
        d="M1283.6 854.1l-200.1 113.6 3.6 3.6 196-111.4c28.1-16 41.9-37 41.9-57.9-1.7 19.2-16 37.4-41.4 52.1z"
        clipRule="evenodd"
        opacity="0.12"
      ></path>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M501.7 305.7l781.9 444.2c25.4 14.3 39.7 33 41.9 52.1 0-20.9-13.8-41.9-41.9-57.9L501.7 299.9c-56.1-32.1-101.6-5.3-101.6 58.8v5.8c0-64.2 45.5-90.5 101.6-58.8z"
        clipRule="evenodd"
        opacity="0.25"
      ></path>
    </svg>
  );
}
