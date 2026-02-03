import { Module } from '@nestjs/common';
import { SecurityController } from './security.controller';
import { ClearanceGuard } from '../auth/clearance/clearance.guard';

@Module({
  controllers: [SecurityController],
  providers: [ClearanceGuard],
})
export class SecurityModule {}
