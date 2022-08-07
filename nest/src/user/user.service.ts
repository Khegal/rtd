import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/models/user.model';
import { InjectModel } from '@nestjs/sequelize';
@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  getUsers(): Promise<User[]> {
    return this.userModel.findAll();
  }
  createUser(data){
    const newUser = new this.userModel({
      id:data.id,
      username:data.username,
      age:data.age,
      mail:data.mail,
      password:data.password,
    })
    newUser.save()
    return newUser
  }
  
  
  signIn(body) {
    let user = this.userModel.findOne({
      where:{username: body.username}  
    })
    return user
  }
}
