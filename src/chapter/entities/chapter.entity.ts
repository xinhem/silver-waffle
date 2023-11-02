import {Entity,Column,CreateDateColumn,PrimaryGeneratedColumn,ManyToOne} from 'typeorm'
import {ReadDetail} from '../../read_details/entities/read_detail.entity'

@Entity()
export class Chapter {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type:'varchar',
        comment:'小说名',
        nullable:false,
        unique:true,
    })
    read_name: string;

    @Column({
        type:'varchar',
        comment:'章节名',
        nullable:false,
    })
    chapter_name: string;

    @Column({
        type:'longtext',
        comment:'章节内容',
        nullable:false,
    })
    chapter_Context:string

    @CreateDateColumn({
        comment:'创建时间'
    })
    create_time: Date;

    @ManyToOne(()=>ReadDetail,readdetails=>readdetails.chapters)
    read_id:number;

}
