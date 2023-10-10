import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({
        unique: true,
        nullable: false,
        type:'varchar',
        comment:'用户名'
    })
    username: string;

    @Column({
        type:'varchar',
        nullable: false,
        comment:'密码'
    })
    password: string;

    @Column({
        type:'int',
        nullable: false,
        comment:'创建时间',
    })
    create_time: Number;

    @Column({
        type:'varchar',
        nullable: false,
        comment:'用户头像',
    })
    User_img: string;

    @Column({
        type:'int',
        nullable: true,
        comment:'更新时间',
    })
    updata_time: Number;
}
