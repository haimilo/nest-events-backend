import { Inject } from '@nestjs/common';

export class AppChineseService {
  constructor(
    @Inject('APP_NAME')
    private readonly name: string,
    @Inject('MESSAGE')
    private readonly message: string,
  ) {}

  getHello(): string {
    return `你好世界! from ${this.name}, ${this.message}`;
  }
}
