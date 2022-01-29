import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const error = exception.getResponse() as
      | string
      | { error: string; statusCOde: number; message: string | string[] };

    const message =
      typeof error === 'string'
        ? { error }
        : { message: error.message, error: error.error };

    response.status(status).json({
      ok: false,
      status,
      ...message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
