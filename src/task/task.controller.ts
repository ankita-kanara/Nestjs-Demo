import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateTaskDto } from './dto/createtask.dto';
import { Task, TaskStatus } from './task.model';
import { TaskService } from './task.service';
console.log('task controler')

@Controller('task')

export class TaskController {

    constructor(private taskService:TaskService){}

    /**
    * @description Add Details API
    * @param CreateTaskDto
    */
    @Post()
    CreateTask(@Body() createTaskDto:CreateTaskDto) : Task {
        console.log(createTaskDto)
        return this.taskService.createTask(createTaskDto);
    }

    /**
    * @description Get Details By Id API
    * @param CreateTaskDto
    */
    @Get('/:id')
    getTaskById(@Param('id') id:string) : Task {
        return this.taskService.getTaskById(id);
    } 
    
    /**
    * @description Delete Details By Id API
    * @param CreateTaskDto
    */
    @Delete('/:id')
    deleteTaskById(@Param('id') id:string) : void {
        return this.taskService.deleteTaskById(id);
    }

    /**
    * @description Update status By Id API
    * @param CreateTaskDto
    */
    @Put('/:id')
    updateTaskStatus(@Param('id') id:string, @Body('status') status:TaskStatus) : Task {
        return this.taskService.updateTaskByStatus(id,status);
    }

}


