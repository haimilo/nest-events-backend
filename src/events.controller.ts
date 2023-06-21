import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  HttpCode,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { CreateEventDto } from './create-event.dto';
import { UpdateEventDTO } from './update-event.dto';
import { Event } from './event.entity';
import { Like, MoreThan, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('/events')
export class EventsController {
  // store events in memory, declared a field, would be an array of events
  private events: Event[] = [];
  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>,
  ) {}

  @Get()
  async findAll() {
    return await this.repository.find();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    return await this.repository.findOne({
      where: { id },
    });
  }

  @Get('/practice')
  async practice() {
    return await this.repository.find({
      // Use "select" to select which fields need to select from the entities
      select: ['id', 'when'],
      // OR condition will be listed in an array after where syntax
      where: [
        {
          // AND condition
          id: MoreThan(3),
          when: MoreThan(new Date('2021-02-12T13:00:00')),
        },
        {
          // Like method is a method that check parameters have contain the same value with the record in the database
          description: Like('%meet%'),
        },
      ],
      //Limit the record by "take" key
      take: 2,
      // Use "skip" key to skip the record
      // Use "order" key to sort the record
      order: {
        id: 'DESC',
      },
    });
  }

  @Post()
  async create(@Body(ValidationPipe) input: CreateEventDto) {
    return await this.repository.save({
      ...input,
      when: new Date(input.when),
    });
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() input: UpdateEventDTO,
  ) {
    // const index = this.events.findIndex((event) => event.id === parseInt(id));
    const event = await this.repository.findOne({
      where: {
        id,
      },
    });

    return await this.repository.save({
      ...event,
      ...input,
      when: input.when ? new Date(input.when) : event.when,
    });
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param() id) {
    // this.events = this.events.filter((event) => event.id !== parseInt(id));
    const event = await this.repository.findOne(id);
    await this.repository.remove(event);
  }
}
