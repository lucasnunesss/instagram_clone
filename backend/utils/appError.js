class AppError extends Error {
  constructor(message, statusCode){
      super(message);
      this.statusCode=statusCode;
      this.status = `${statusCode}`.startsWith("4") ? 'fail' : 'error'; // Se o código de status começar com 4, o código da fail
      Error.captureStackTrace(this, this.constructor) // Captura a origem do erro
  }
}

module.exports = AppError;