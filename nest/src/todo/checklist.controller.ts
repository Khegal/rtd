import { Controller, Get, Post, Body } from '@nestjs/common';
import { CheckList } from 'src/models/checklist.model';
import { CheckListService } from './checklist.service';

type CheckListBody = { task: string;}


@Controller('check')
export class CheckListController {
    constructor(private readonly service: CheckListService) {}
    
    @Get('checklists')
    getChecklists() {
        return this.service.getCheckList();
    }
    @Post('/create')
    createTask(@Body() body: CheckListBody) {
        return this.service.createTask(body)
    }
}