import {Entity, PrimaryColumn, Column, CreateDateColumn} from 'typeorm'

@Entity()
export class Swiper {
 
    @PrimaryColumn()
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

}
