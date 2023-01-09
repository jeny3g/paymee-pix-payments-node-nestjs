import { QRCode, QRCodeProps } from "@application/entities/qr-code";

type Override = Partial<QRCodeProps>;


export function makeQRCodeFactory(override: Override = {}){
  const qrcode = new QRCode({
    id: 'id',
    createdAt: new Date(),

    base64: 'base64',
    plain: 'plain',
    url: "www.myqrcode.com/image",
    ...override
  });

  return qrcode;
}
