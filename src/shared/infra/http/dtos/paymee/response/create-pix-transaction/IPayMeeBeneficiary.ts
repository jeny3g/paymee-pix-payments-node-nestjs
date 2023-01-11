import { IPayMeeKeys } from './IPayMeeKeys';
import { IPayMeeQrCode } from './IPayMeeQrCode';

export interface IPayMeeBeneficiary {
  qrCode: IPayMeeQrCode;
  keys: IPayMeeKeys;
}
