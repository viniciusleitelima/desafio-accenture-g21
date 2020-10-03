import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MsgRequest } from './model/app.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/traducaoMsg')
  async traducaoMsg(
    @Body() msgRequest: MsgRequest,
  ): Promise<any> {
    const msgTraduzida = await this.appService.traducaoMsg(msgRequest);
    return {
      msgTraduzida
    };
  }
}
