import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignalsController } from './signals/signals.controller';
import { VaultService } from './vault/vault.service';
import { VaultController } from './vault/vault.controller';
import { SecurityModule } from './security/security.module';

@Module({
  imports: [SecurityModule],
  controllers: [AppController, SignalsController, VaultController],
  providers: [AppService, VaultService],
})
export class AppModule {}
