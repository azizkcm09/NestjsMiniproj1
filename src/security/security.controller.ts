import { Controller, Get, UseGuards } from '@nestjs/common';
import { ClearanceGuard } from '../auth/clearance/clearance.guard';

@Controller('security')
export class SecurityController {
  @UseGuards(ClearanceGuard)
  @Get('data')
  getSensitiveData(): string {
    return 'Sensitive Starship Data retrieved.';
  }
}
