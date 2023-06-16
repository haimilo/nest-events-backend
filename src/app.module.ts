import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './event.entity';

@Module({
  // in the import module you need to import TypeOrmModule and forRoot method
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'example',
      database: 'nest-events',
      entities: [Event],
      // automatically updates their database schema
      synchronize: true,
    }),
    // TypeOrmModule.forFeature will automatically update its database schema
    TypeOrmModule.forFeature([Event])
  ],
  controllers: [AppController, EventsController],
  providers: [AppService],
})
export class AppModule {}
