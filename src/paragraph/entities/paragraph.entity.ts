import {PrimaryGeneratedColumn,Entity,Column,CreateDateColumn} from 'typeorm'

@Entity()
export class Paragraph {

   @PrimaryGeneratedColumn()
   id: number

   @Column({
    type: 'text',
    comment:'段落内容'
   })
   content: string;

   @Column({
    type:'varchar',
    comment:'小说名字'
   })
   read_name:string;

   @Column({
    type:'int',
    comment:'小说id'
   })
   read_id:number;

   @CreateDateColumn()
   create_time: Date;
}
