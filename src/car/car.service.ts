import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { resolve } from 'path';
import { CARS } from './cars.mock';
@Injectable()
export class CarService {
   private cars = CARS;

   public getCars(){
      return this.cars;
   }
   
   public postCar(car){
      return this.cars.push(car);
   }


   public getCarById(id:number):Promise<any>{
      const carId = Number(id);
      return new Promise((resolve) =>{
         const car = this.cars.find((car) => car.id === carId);
         if(!car)
         {
            throw new HttpException('Book does not exist!',404);
         }
         return resolve(car);
      });
   }

   public deleteCarById(id: number):Promise<any>{
      console.log('delete request ====')
      //Get carid 
      const carId = Number(id);
      return new Promise((resolve) =>{

         //find carid index in array
         const index = this.cars.findIndex((car) => car.id === carId);
         console.log(index)
         //if index not found gives errors
         if(index === -1)
         {
            throw new HttpException('not fount!',404);
         }
         console.log(this.cars)
         //delete the array object based on index
         console.log(this.cars.slice(index,1))
         return this.cars.slice(index,1);

         console.log(this.cars)
      //   return this.cars;
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

   //public putCarById(id:number,propertyName:string,propertyValue:string): Promise<any> {
     // const carId = Number(id);
     // console.log('carId' +carId)
     // return new Promise((resolve) =>{
     //    const index = this.cars.findIndex((car) => car.id === carId);
     //    console.log('index' +index)
     //    if(index === -1)
     //    {
     //       console.log('if truee==')
     //       throw new HttpException('Book does not exist!',404);
     //    }
     //    console.log(this.cars)
     //    this.cars[index][propertyName] = propertyValue;
     //    return resolve(this.cars[index]);
     // });
  // }
}
