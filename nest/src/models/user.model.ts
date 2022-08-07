import { StringifyOptions } from 'querystring';
import { Column, Model, Table } from 'sequelize-typescript'
import { UUIDV4 } from 'sequelize';

@Table
export class User extends Model {
  @Column({ primaryKey: true, defaultValue : UUIDV4() })
  id: string;
  @Column({ unique: true })
  username: string;
  @Column({ defaultValue: true })
  age: string;
  @Column
  password: string;
}