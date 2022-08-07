import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { CheckListController } from './todo/checklist.controller';
import { CheckListService } from './todo/checklist.service';
import { CheckList } from './models/checklist.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '13.215.139.119',
      port: 3306,
      username: 'rtd',
      password: 'Tiny722$',
      database: 'kherlen',
      models: [User, CheckList],
    }),
    SequelizeModule.forFeature([User, CheckList]),
  ],

  controllers: [AppController, UserController, CheckListController],
  providers: [AppService, UserService, CheckListService],
})
export class AppModule {}
