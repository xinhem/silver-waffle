import {Entity,Column,CreateDateColumn,PrimaryGeneratedColumn,OneToMany} from 'typeorm'
import {ReadDetail} from '../../read_details/entities/read_detail.entity'

@Entity()
export class Chart {

   @PrimaryGeneratedColumn()
   id:number;


   @Column({
    type:'varchar',
    comment:'排行榜名称',
   })
   charts_name:string;

   @CreateDateColumn()
   create_time:Date;

   @Column({
    type:'varchar',
    comment:'排行榜类型',
   })
   type:string;

   @Column({
    type:'varchar',
    comment:'排行榜说明',
   })
   illustrate:string

   @OneToMany(type => ReadDetail, readDetail => readDetail.charts)
   Charts:ReadDetail[];

}
