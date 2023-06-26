import { IsDateString, IsString, Length } from 'class-validator';

export class CreateEventDto {
  // multi validate Dto
  @IsString()
  @Length(5, 255, { message: 'The name length is wrong, it\'s must be between 5 and 255 characters' })
  name: string;
  // single validate Dto
  @Length(5, 255)
  description: string;
  @IsDateString()
  when: string;
  @Length(5, 255, {groups: ['create']})
  @Length(10, 20, {groups: ['update']})
  address: string;
}
