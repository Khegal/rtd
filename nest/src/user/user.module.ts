import { Global, Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AppModule } from "src/app.module";
import { User } from "src/models/user.model";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
@Global()
@Module({
    imports: [
      AppModule,
      SequelizeModule.forRoot({
        dialect: 'mysql',
        host: '13.215.139.119',
        port: 3306,
        username: 'rtd',
        password: 'Tiny722$',
        database: 'kherlen',
        models: [User],
      }),
      SequelizeModule.forFeature([User]),
    ],
  
    controllers: [UserController],
    providers: [UserService],
  })
  export class userModule {}