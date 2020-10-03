import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  traducaoMsg(msg): string {
    return msg;
  }
}
