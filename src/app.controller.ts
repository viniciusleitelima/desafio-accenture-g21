import { Body, Controller, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { MsgRequest } from './model/app.model';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/traducaoMsg')
  async traducaoMsg(
    @Body() msgRequest: MsgRequest,
    @Res() response: Response,
  ): Promise<any> {
    const msgTraduzida = await this.appService.traducaoMsg(msgRequest);
    
    response.status(200).json({
      msg:msgTraduzida
    });
    return;
  }
}
