import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  HttpCode
} from '@nestjs/common';

@Controller('/events')
export class EventsController {
  @Get()
  findAll() {
    return [
      {
        id: 1,
        name: 'First Name',
      },
      {
        id: 2,
        name: 'Last Name',
      },
      {
        id: 3,
        name: 'Full Name',
      },
    ];
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return {
      id: id,
      name: 'First Name',
    };
  }

  @Post()
  create(@Body() input) {
    return input;
  }
  
  @Patch(':id')
  update(@Param('id') id, @Body() input) {
    return {
      id: id,
      value: input,
    };
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param() id) {
    return id;
  }
}
