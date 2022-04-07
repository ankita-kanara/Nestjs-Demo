import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { resolve } from 'path';
import { CARS } from './cars.mock';
@Injectable()
export class CarService {
   private cars = CARS;

   public getCars(){
      //get car array
      return this.cars;
   }
   
   public postCar(car){
      //push new car object in array
      return this.cars.push(car);
   }


   public getCarById(id:number):Promise<any>{
      //Get carid 
      const carId = Number(id);
      return new Promise((resolve) =>{

         //find car object based on id 
         const car = this.cars.find((car) => car.id === carId);
         if(!car)
         {
            throw new HttpException('Book does not exist!',404);
         }
         return resolve(car);
      });
   }

   public deleteCarById(id: number):Promise<any>{
      //Get carid 
      const carId = Number(id);
      return new Promise((resolve) =>{

         //find carid index in array
         const index = this.cars.findIndex((car) => car.id === carId);
   
         //if index not found gives errors
         if(index === -1)
         {
            throw new HttpException('not fount!',404);
         }
         //delete the array object based on index
         return resolve(this.cars.slice(index,1));
      });
   }

   public putCarById(id: number ,car): Promise<any> {
      //Get carid 
      const carId = Number(id);
      return new Promise((resolve) =>{

         //find carid index in array
         const index = this.cars.findIndex((car) => car.id === carId);
         
         //if index not found gives errors
         if(index === -1)
         {
            throw new HttpException('Book does not exist!',404);
         }

         //replace updated array index in main array
         this.cars[index] = car;
         return resolve(this.cars);
      });
   }
}
