export class AppError {
  public readonly message: string;
  public readonly statusCode: number;
  private readonly error: any;

  constructor(message: string, statusCode = 400, error?: any) {
    this.message = message;
    this.statusCode = statusCode;
    this.error = error;
  }
}
