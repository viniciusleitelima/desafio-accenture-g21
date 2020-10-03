import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  dictionary: Object = {
    1: ["A", "B", "C"],
    2: ["D", "E", "F"],
    3: ["G", "H", "I"],
    4: ["J", "K", "L"],
    5: ["M", "N", "O"],
    6: ["P", "Q", "R", "S"],
    7: ["T", "U", "V"],
    8: ["W", "X", "Y", "Z"]
  };

  async traducaoMsg(body: any): Promise<string> {
    const { msg } = body;

    const msgSplit = msg
      .split(' ');
  
    for(var i in msgSplit){
      if(
        (msgSplit[i] === 1) &&
        (msgSplit[i+1] === msgSplit)
        ){

      }
      console.log(msgSplit[i]);
    }  
    return "ok";
  }

}
