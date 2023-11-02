import {Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,OneToMany, ManyToOne,JoinColumn} from 'typeorm'
import {Chapter} from '../../chapter/entities/chapter.entity'
import {Chart} from '../../charts/entities/chart.entity'
import {Label} from '../../label/entities/label.entity'

@Entity()
export class ReadDetail {
  
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        name:'read_name',
        comment:'小说名',
        nullable:false,
    })
    name:string;

    @Column({
        comment:'小说封面',
        type:'varchar',
        nullable:false,
    })
    read_img_url:string;

    @Column({
        type:'text',
        comment:'小说简介',
        nullable:false,
    })
    Details:string;

    @Column({
        type:'varchar',
        comment:'作者',
        nullable:false,
    })
    authod:string;

    @Column({
        comment:'小说类型',
        nullable:false,
        type:'varchar',
    })
    type:string;

    @Column({
        type:'int',
        comment:'小说评分',
        nullable:false,
    })
    score:number;

    @Column({
        type:'text',
        comment:'小说小分类',
        nullable:false,
    })
    read_type:string;

    @Column({
        comment:'小说热度',
        nullable:false,
        type:'int',
    })
    heat:number;

    @Column({
        type:'varchar',
        comment:'小说状态',
    })
    store:string;

    @Column({
        comment:'小说大分类 0为男 1为女',
        nullable:false,
        type:'int',
    })
    Big_type:number;

    @Column({
        comment:'小说点赞数',
        nullable:false,
        type:'int',
    })
    like:number;

    @Column({
        type:'varchar',
        comment:'小说标签',
    })
    read_label:string;




    @CreateDateColumn()
    create_time:Date;

    @OneToMany(()=>Chapter,chapter=>chapter.read_id)
    chapters:Chapter[];

    @JoinColumn()
    @ManyToOne(()=>Chart,chart=>chart.Charts)
    charts:number;

    @JoinColumn()
    @OneToMany(()=>Label,label=>label.read_id)
    labels:number;

}
