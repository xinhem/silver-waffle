import {PrimaryGeneratedColumn,Entity,Column,CreateDateColumn,ManyToOne,JoinColumn} from 'typeorm'
import {Type} from '../../type/entities/type.entity'

@Entity()
export class TypeLabel {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type:'varchar',
        comment:'标签名称'
    })
    label_name:string;

    @Column({
        type:'varchar',
        comment:'标签类型'
    })
    type:string

    @CreateDateColumn()
    create_time:Date

    @JoinColumn()
    @ManyToOne(()=>Type, type => type.typelabels)
    type_label:Number;

}
