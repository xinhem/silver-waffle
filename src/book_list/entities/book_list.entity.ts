import {Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,OneToMany, ManyToOne,JoinColumn} from 'typeorm'
import {Subject} from '../../subject/entities/subject.entity'

@Entity()
export class BookList {

    @PrimaryGeneratedColumn()
    id: number;


    @Column({
        type:'int',
        comment:'用户id'
    })
    user_id: number;


    @Column({
        type:'json',
        comment:'推荐书籍列表'
    })
    recommend_read:string


    @Column({
        type:'text',
        comment:'推荐原因'
    })
    context:string

    @CreateDateColumn()
    create_date: Date;

    @ManyToOne(type => Subject, subject => subject.book_list,{ nullable: false, eager: true })
    @JoinColumn()
    subject: number;

    @Column({
        comment:'书单类型',
        type:'varchar'
    })
    type:string
}
