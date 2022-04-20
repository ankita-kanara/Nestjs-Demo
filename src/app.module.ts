import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';
import { CarController } from './car/car.controller';


@Module({
  imports: [CarModule, TaskModule,AuthModule,TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'scaletech',
    database:'task-management',
    autoLoadEntities:true,
    synchronize:true,
  })],
  controllers: [],
})
export class AppModule {}