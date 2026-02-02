import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenModule } from './token/token.module';
import { BotModule } from './bot/bot.module';
import { UnlockModule } from './unlock/unlock.module';
import { LogModule } from './log/log.module';

@Module({
  imports: [TokenModule, BotModule, UnlockModule, LogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
