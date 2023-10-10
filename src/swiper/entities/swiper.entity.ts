import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from 'typeorm'

@Entity()
export class Swiper {
 
    @PrimaryGeneratedColumn({   
        comment:'轮播图id'
    })
    id: number;
    
    @Column({
       type:'varchar',
       comment:'轮播图名称',
       nullable: false,
    })
    name: string;

    @Column({
        type:'varchar',
        comment:'轮播图地址',
        nullable: false,
    })
    img_address: string;

    @Column({
        type:'int',
        comment:'小说id',
        nullable: false,
    })
    read_id: number;

    @CreateDateColumn()
    create_time: Date;

   @Column({
     type:'varchar',
     comment:'轮播图类型',
     nullable: false,  //不为空
   })
   types:string

}
