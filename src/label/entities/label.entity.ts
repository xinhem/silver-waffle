import {Column,Entity,CreateDateColumn,PrimaryGeneratedColumn,ManyToOne} from 'typeorm'
import {ReadDetail} from '../../read_details/entities/read_detail.entity'

@Entity()
export class Label {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'varchar',
        comment:'小说名'
    })
    read_name:string;

    @Column({
        type:'varchar',
        comment:'小说标签'
    })
    read_label:string;

    @CreateDateColumn()
    create_time:Date;

    @ManyToOne(()=>ReadDetail,readDetail=>readDetail.labels)
    read_id:number
}
