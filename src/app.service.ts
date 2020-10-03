import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  dictionary: Object = {
    2: ["A", "B", "C"],
    3: ["D", "E", "F"],
    4: ["G", "H", "I"],
    5: ["J", "K", "L"],
    6: ["M", "N", "O"],
    7: ["P", "Q", "R", "S"],
    8: ["T", "U", "V"],
    9: ["W", "X", "Y", "Z"]
  };

  async traducaoMsg(body: any): Promise<string> {
    const { msg } = body;

    const msgSplit = msg
      .split(' ');
  
    for(var i in msgSplit){
      if(
        (msgSplit[i] === 2) &&
        (msgSplit[i] === msgSplit[i+1])
        ){

      }
      console.log(msgSplit[i]);
    }  
    return "ok";
  }

}
