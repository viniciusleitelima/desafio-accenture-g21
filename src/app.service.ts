import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {


  dicionario: Object = {
    _:" ",
    2 : "A",
    22 : "B",
    222 : "C",
    3 : "D",
    33 : "E",
    333 : "F",
    4 : "G",
    44 : "H",
    444 : "I",
    5:"J",
    55:"K",
    555:"L",
    6:"M",
    66:"N",
    666:"O",
    7:"P",
    77:"Q",
    777:"R",
    7777:"S",
    8:"T",
    88:"U",
    888:"V",
    9:"W",
    99:"X",
    999:"Y",
    9999:"Z"
  }
  

  async traducaoMsg(body: any): Promise<any> {
    const { msg } = body;

    const msgSplit = msg
      .split("");
    let msgRetorno = [];  
    for(var i = 0; i <= msgSplit.length; i++){
      const nextIndex = i + 1;
      let index;
      if(msgSplit[i] === "_"){
        if ((msgSplit[i + 1] === msgSplit[i]) && (msgSplit[i + 2] === msgSplit[i])) 
        {
          index = msgSplit[i] + msgSplit[i + 1] + msgSplit[i + 2];
          msgRetorno.push(this.dicionario[index]);
          i = i + 2;
        }else if((msgSplit[i + 1] === msgSplit[i])) {
          index = msgSplit[i] + msgSplit[i + 1];
          msgRetorno.push(this.dicionario[index]);
          i = i + 1;
        }else{
          index = msgSplit[i];
          msgRetorno.push(this.dicionario[index]);
        }
      }else if(msgSplit[i] === "2"){
            if ((msgSplit[i + 1] === msgSplit[i]) && (msgSplit[i + 2] === msgSplit[i])) 
            {
              index = msgSplit[i] + msgSplit[i + 1] + msgSplit[i + 2];
              msgRetorno.push(this.dicionario[index]);
              i = i + 2;
            }else if((msgSplit[i + 1] === msgSplit[i])) {
              index = msgSplit[i] + msgSplit[i + 1];
              msgRetorno.push(this.dicionario[index]);
              i = i + 1;
            }else{
              index = msgSplit[i];
              msgRetorno.push(this.dicionario[index]);
            }
          }else if(msgSplit[i] === "3"){
            if ((msgSplit[i + 1] === msgSplit[i]) && (msgSplit[i + 2] === msgSplit[i])) 
            {
              index = msgSplit[i] + msgSplit[i + 1] + msgSplit[i + 2];
              msgRetorno.push(this.dicionario[index]);
              i = i + 2;
            }else if((msgSplit[i + 1] === msgSplit[i])) {
              index = msgSplit[i] + msgSplit[i + 1];
              msgRetorno.push(this.dicionario[index]);
              i = i + 1;
            }else{
              index = msgSplit[i];
              msgRetorno.push(this.dicionario[index]);
            }
          }else if(msgSplit[i] === "4"){
            if ((msgSplit[i + 1] === msgSplit[i]) && (msgSplit[i + 2] === msgSplit[i])) 
            {
              index = msgSplit[i] + msgSplit[i + 1] + msgSplit[i + 2];
              msgRetorno.push(this.dicionario[index]);
              i = i + 2;
            }else if((msgSplit[i + 1] === msgSplit[i])) {
              index = msgSplit[i] + msgSplit[i + 1];
              msgRetorno.push(this.dicionario[index]);
              i = i + 1;
            }else{
              index = msgSplit[i];
              msgRetorno.push(this.dicionario[index]);
            }
          }else if(msgSplit[i] === "5"){
            if ((msgSplit[i + 1] === msgSplit[i]) && (msgSplit[i + 2] === msgSplit[i])) 
            {
              index = msgSplit[i] + msgSplit[i + 1] + msgSplit[i + 2];
              msgRetorno.push(this.dicionario[index]);
              i = i + 2;
            }else if((msgSplit[i + 1] === msgSplit[i])) {
              index = msgSplit[i] + msgSplit[i + 1];
              msgRetorno.push(this.dicionario[index]);
              i = i + 1;
            }else{
              index = msgSplit[i];
              msgRetorno.push(this.dicionario[index]);
            }
          }else if(msgSplit[i] === "6"){
            if ((msgSplit[i + 1] === msgSplit[i]) && (msgSplit[i + 2] === msgSplit[i])) 
            {
              index = msgSplit[i] + msgSplit[i + 1] + msgSplit[i + 2];
              msgRetorno.push(this.dicionario[index]);
              i = i + 2;
            }else if((msgSplit[i + 1] === msgSplit[i])) {
              index = msgSplit[i] + msgSplit[i + 1];
              msgRetorno.push(this.dicionario[index]);
              i = i + 1;
            }else{
              index = msgSplit[i];
              msgRetorno.push(this.dicionario[index]);
            }
          }else if(msgSplit[i] === "7"){
            if ((msgSplit[i + 1] === msgSplit[i]) && (msgSplit[i + 2] === msgSplit[i])) 
            {
              index = msgSplit[i] + msgSplit[i + 1] + msgSplit[i + 2];
              msgRetorno.push(this.dicionario[index]);
              i = i + 2;
            }else if((msgSplit[i + 1] === msgSplit[i])) {
              index = msgSplit[i] + msgSplit[i + 1];
              msgRetorno.push(this.dicionario[index]);
              i = i + 1;
            }else{
              index = msgSplit[i];
              msgRetorno.push(this.dicionario[index]);
            }
          }else if(msgSplit[i] === "8"){
            if ((msgSplit[i + 1] === msgSplit[i]) && (msgSplit[i + 2] === msgSplit[i])) 
            {
              index = msgSplit[i] + msgSplit[i + 1] + msgSplit[i + 2];
              msgRetorno.push(this.dicionario[index]);
              i = i + 2;
            }else if((msgSplit[i + 1] === msgSplit[i])) {
              index = msgSplit[i] + msgSplit[i + 1];
              msgRetorno.push(this.dicionario[index]);
              i = i + 1;
            }else{
              index = msgSplit[i];
              msgRetorno.push(this.dicionario[index]);
            }
          }else if(msgSplit[i] === "9"){
            if ((msgSplit[i + 1] === msgSplit[i]) && (msgSplit[i + 2] === msgSplit[i])) 
            {
              index = msgSplit[i] + msgSplit[i + 1] + msgSplit[i + 2];
              msgRetorno.push(this.dicionario[index]);
              i = i + 2;
            }else if((msgSplit[i + 1] === msgSplit[i])) {
              index = msgSplit[i] + msgSplit[i + 1];
              msgRetorno.push(this.dicionario[index]);
              i = i + 1;
            }else{
              index = msgSplit[i];
              msgRetorno.push(this.dicionario[index]);
            }
          } 
      
    } 
    return msgRetorno.join("");
  }

}





























