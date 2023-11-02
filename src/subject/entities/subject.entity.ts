import {Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,OneToMany, ManyToOne,JoinColumn} from 'typeorm'
import {BookList} from '../../book_list/entities/book_list.entity'

@Entity()
export class Subject {

  @PrimaryGeneratedColumn()
  id: number;


  @Column({
    type:'varchar',
    comment:'话题名称'
  })
  subject_name:string

  @Column({
    type:'varchar',
    comment:'话题类型'
  })
  type:string

  @Column({
    type:'varchar',
    comment:'话题图片地址'
  })
  subject_img_url:string

  @Column({
    type:'json',
    comment:'推荐书籍'
  })
  recommend_read:string


  @Column({
    type:'varchar',
    comment:'话题描述'
  })
  details_context:string


  @Column({
    type:'int',
    comment:'话题作者'
  })
  user_id:number

  @CreateDateColumn()
  create_date:Date;

  @JoinColumn()
  @OneToMany(type => BookList, bookList => bookList.subject)
  book_list:number;
  
}
