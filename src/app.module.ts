import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignalsController } from './signals/signals.controller';

@Module({
  imports: [],
  controllers: [AppController, SignalsController],
  providers: [AppService],
})
export class AppModule {}
