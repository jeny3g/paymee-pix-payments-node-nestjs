import { ErrorMessages } from '../constants/error-messages';

export class ValidationHelper {
  public static validateCPF(cpf: string) {
    if (cpf.length !== 11) {
      throw new Error(ErrorMessages.INVALID_CPF);
    }
    return true;
  }

  public static validateCNPJ(cnpj: string) {
    if (cnpj.length !== 14) {
      throw new Error(ErrorMessages.INVALID_CNPJ);
    }
    return true;
  }
}
