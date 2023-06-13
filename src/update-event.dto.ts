import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';

export class UpdateEventDTO extends PartialType(CreateEventDto) {
  // name?: string;
  // description?: string;
  // when?: string;
  // address?: string;
}
