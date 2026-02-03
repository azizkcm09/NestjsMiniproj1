import { Injectable } from '@nestjs/common';

@Injectable()
export class VaultService {
  private balance = 0;

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}
