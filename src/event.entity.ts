import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/*
  First parameter is the table name.
  Second parameter is the set of entities specific options. Can alse specify the table name this way
  The default sort order and a couple other things we would get into.

  Every entity must have primary column
*/
// @Entity('event', {
//   name: 'event',
// })
@Entity()
export class Event {
  /*
  MySQL: AUTO_INCREMENT int
  Postgres: SERIAL
  Oracle: SEQUENCE

  It's good for:
  * Credit Card Number
  * Social Security Number
  * Phone Number
  
  Composite key:
  Key that consists of 2 columns or more
  */
  @PrimaryGeneratedColumn('uuid')
  id: number;
  // @PrimaryGeneratedColumn()

  @Column({
    length: 100,
  })
  name: string;

  @Column()
  description: string;

  @Column({
    name: 'when_date',
  })
  when: Date;

  @Column()
  address: string;
}
