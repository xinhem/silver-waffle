import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from 'typeorm'

@Entity()
export class Type {
    @PrimaryGeneratedColumn()
    id: number;


    @Column({
        type: 'varchar',
        comment:'类型名称',
        nullable: false,
    })
    name: string;

    @CreateDateColumn()
    createTime: Date;
}
