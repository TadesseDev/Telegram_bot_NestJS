import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class BotService implements OnModuleInit {
  onModuleInit() {
    this.botMessage();
  }
  // OnModuleInit() {
  //   this.botMessage();
  // }
  botMessage() {
    process.env.NTBA_FIX_319 = '1';
    const TelegramBot = require('node-telegram-bot-api');

    const token = '6890218667:AAEk_wmMeDjd4Sw2wI-aWQ_AzdEqeOjLuyQ';

    const bot = new TelegramBot(token, { polling: true });

    bot.on('message', (msg) => {
      let Hi = 'hi';
      let whatToDo = 'what can you do';
      console.log(msg.text.toString());
      if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(
          msg.from.id,
          'Hello ' +
            msg.from.first_name +
            ' what would you like to know about me ?',
        );
      } else if (msg.text.toString().toLowerCase().indexOf(whatToDo) === 0) {
        bot.sendMessage(
          msg.from.id,
          `I can tell you about my creator, my purpose and my future plans. ${msg.from.first_name}`,
        );
      }
    });
  }
}
