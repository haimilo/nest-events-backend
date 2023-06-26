import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppJapanService {
  constructor(
    @Inject('APP_NAME')
    private readonly name: string,
    @Inject('MESSAGE')
    private readonly messages: string
  ) {}

  getHello(): string {
    return `こんにちは世界! from ${this.name}, ${this.messages}`;
  }
}
