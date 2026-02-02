import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenModule } from './token/token.module';
import { BotModule } from './bot/bot.module';
import { UnlockModule } from './unlock/unlock.module';
import { LogModule } from './log/log.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Token } from './token/entities/token.entity';
import { Log } from './log/entities/log.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST', 'localhost'),
        port: config.get<number>('DB_PORT', 5432),
        username: config.get<string>('DB_USERNAME', 'user'),
        password: config.get<string>('DB_PASSWORD', 'password'),
        database: config.get<string>('DB_DATABASE', 'homelock_db'),
        entities: [Token, Log],
        synchronize: true, // 開発中は自動でテーブル作成
        logging: true, // SQLの中身をターミナルに表示
      }),
    }),

    TokenModule,
    BotModule,
    UnlockModule,
    LogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
