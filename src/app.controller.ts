import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/traducaoMsg')
  async traducaoMsg(
    @Body() msgRequest: any,
  ): Promise<any> {
    const msgTraduzida = await this.appService.traducaoMsg(msgRequest);
    
    return {
      msgTraduzida
    };
  }
}
