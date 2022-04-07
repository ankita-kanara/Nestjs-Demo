import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CarService } from './car.service';
import { CarDto } from './car.dto';
import { query } from 'express';
 
@Controller('car')
export class CarController {
    constructor(private carService : CarService){}

    //get car object
    @Get()
    public getCars()
    {
        // call service file for getCars()
        return this.carService.getCars(); 
    }

    //post new data object
    @Post()
    public postCars(@Body() car: CarDto) {
        // call service file for postCar()
        return this.carService.postCar(car);
    }

    //get car object by id
    @Get(':id')
    public async getCarById(@Param('id') id:number) {
        // call service file for getCarById()
        return this.carService.getCarById(id);
    }

    //delete car object by id
    @Delete(':id')
    public async deleteCarById(@Param('id') id:number) {
        // call service file for deleteCarById()
        return this.carService.deleteCarById(id);
    }

    //update car object value
    @Put(':id')
    public async putCarById(@Param('id') id:number ,@Body() car: CarDto) {
        return this.carService.putCarById(id,car);
    }
}
