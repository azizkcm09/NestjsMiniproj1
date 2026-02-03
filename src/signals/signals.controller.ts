import { Controller, Post, Body } from '@nestjs/common';
import CreateSignalDto from './create-signal.dto';

@Controller('signals')
export class SignalsController {
  @Post('send')
  send(@Body() createSignalDto: CreateSignalDto): string {
    const { origin, frequency } = createSignalDto;

    return `Signal received from ${origin} on frequency ${frequency}!`;
  }
}
