import { Module } from '@nestjs/common';
import { UnlockService } from './unlock.service';
import { UnlockController } from './unlock.controller';

@Module({
  providers: [UnlockService],
  controllers: [UnlockController]
})
export class UnlockModule {}
