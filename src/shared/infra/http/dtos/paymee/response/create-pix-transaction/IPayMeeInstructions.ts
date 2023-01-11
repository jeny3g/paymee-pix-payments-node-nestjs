import { IPayMeeBeneficiary } from './IPayMeeBeneficiary';
import { IPayMeeQrCode } from './IPayMeeQrCode';
import { IPayMeeSteps } from './IPayMeeSteps';

export interface IPayMeeInstructions {
  chosen: string;
  name: string;
  label: string;

  beneficiary: IPayMeeBeneficiary;
  qrCode: IPayMeeQrCode;
  steps: IPayMeeSteps;
}
