import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CheckList } from 'src/models/checklist.model';


@Injectable()
export class CheckListService {

    constructor(@InjectModel(CheckList) private checklistModel: typeof CheckList) {
    }
    getCheckList() {
        return this.checklistModel.findAll()
    }
    createTask(data) {
        const newTask = new this.checklistModel({
            task:data.task,
            isDone:data.isDone,
        });
        newTask.save()
        return newTask
    }
}