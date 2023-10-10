import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User_Collect {
  
    @PrimaryGeneratedColumn()
    id:string

    @Column({
        name: 'user_id',
        type: 'varchar',
        length: 255,
        nullable: false,
        comment: '用户id'
    })
    user_id:number


    @Column({
        type:'int',
        nullable:false,
        comment:'书籍id'
    })
    read_id:number

    @Column({
        type:'int',
        nullable:true,
        comment:'章节id'
    })
    chapter_id:number

    @Column({
        name: 'collect_read',
        type: 'varchar',
        length: 255,
        nullable: false,
        comment: '收藏书名'
    })
    collect_read:string

    @Column({
        type:'varchar',
        length:255,
        nullable:false,
        comment:'收藏时间'
    })
    create_time:String
}
