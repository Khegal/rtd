import { Body, Controller, Get, Post } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/models/user.model';
import { ReturningStatementNotSupportedError } from 'typeorm';
import { UserService } from './user.service';

type StudentsBody = { firstame : string, lastname : string; age : any; score : any; mail : any; isActive: boolean}

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  Students: any[] = []

  @Get('/users')
  getUsers(){
    return this.userService.getUsers()
  }
  @Post('/create')
  createUser(@Body() body:StudentsBody) {
    this.userService.createUser(body)
    return { message: "hohino", body}
  }
  @Post('/signIn')
  signIn(@Body() body:StudentsBody) {
    return this.userService.signIn(body)

  }
}
