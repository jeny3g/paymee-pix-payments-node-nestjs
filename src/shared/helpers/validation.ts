import { BadRequestException } from '@nestjs/common';
import { ErrorMessages } from '../constants/error-messages';

export class ValidationHelper {
  public static validateCPF(cpf: string) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf === '') throw new BadRequestException(ErrorMessages.INVALID_CPF);

    // Eliminate invalid CPF
    if (cpf.length !== 11)
      throw new BadRequestException(ErrorMessages.INVALID_CPF);

    let add = 0;
    let i;
    for (i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cpf.charAt(9)))
      throw new BadRequestException(ErrorMessages.INVALID_CPF);

    add = 0;
    for (i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(cpf.charAt(10)))
      throw new BadRequestException(ErrorMessages.INVALID_CPF);

    return true;
  }

  public static validateCNPJ(cnpj: string) {
    if (cnpj.length !== 14) {
      throw new BadRequestException(ErrorMessages.INVALID_CNPJ);
    }
    return true;
  }
}
