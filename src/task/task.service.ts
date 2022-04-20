import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
//import { CreateTaskDto } from './dto/createtask.dto';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { CreateTaskDto } from './dto/createtask.dto';

@Injectable()
export class TaskService {
    private tasks: Task[] = [];

    /**
    * @description Add Details Api 
    * @param CreateTaskDto
    */
    createTask(createTaskDto:CreateTaskDto):Task {
        const { title, description } = createTaskDto;
        const task: Task = {
            id:uuid(),
            title,
            description,
            status:TaskStatus.OPEN
        };

       this.tasks.push(task);
       return task;
    }



    /**
     * @description  Returns details by id
     * @param id
     */
    getTaskById(id:string) : Task {
        const found = this.tasks.find((task)=>task.id===id);
        if(!found)
        {
            throw new NotFoundException(`this  id: {$id} not found`);
        }
        return found;
    }



    /**
     * @description  Delete details by id
     * @param id
     */
    deleteTaskById(id:string) : void {
        this.tasks = this.tasks.filter((task)=>task.id===id);
    }

    /**
     * @description  Update status by id
     * @param id,status
     */
    updateTaskByStatus(id:string, status:TaskStatus) {
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    }
}


