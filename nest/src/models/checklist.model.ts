import { Column, Model, Table } from 'sequelize-typescript';
import { UUIDV4 } from 'sequelize';
@Table
export class CheckList extends Model {
    @Column({ primaryKey : true, defaultValue : UUIDV4() })
    id: string;
    @Column
    task: string;
    @Column
    isDone: boolean;
}