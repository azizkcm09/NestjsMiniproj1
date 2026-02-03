import { Controller, Post, Get, Body } from '@nestjs/common';
import { VaultService } from './vault.service';

@Controller('vault')
export class VaultController {
  constructor(private vaultService: VaultService) {}

  @Post('deposit')
  deposit(@Body('amount') amount: number): string {
    this.vaultService.deposit(amount);
    return `Deposited ${amount} credits`;
  }

  @Get('balance')
  getBalance(): number {
    return this.vaultService.getBalance();
  }
}
