import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

@Controller('/events')
export class EventsController {
  @Get()
  findAll() {}
  @Get(':id')
  findOne(@Param() id) {
    return id;
  }
  @Post()
  create(@Body() input) {
    return input;
  }
  @Patch(':id')
  update(@Param() id, @Body() input) {
    return id;
  }
  @Delete(':id')
  remove(@Param() id) {
    return id;
  }
}
