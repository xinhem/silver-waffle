import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,OneOrMore, OneToMany} from 'typeorm'
import {TypeLabel} from '../../type_label/entities/type_label.entity'

@Entity()
export class Type {
    @PrimaryGeneratedColumn()
    id: number;


    @Column({
        type: 'varchar',
        comment:'类型名称',
        nullable: false,
    })
    name: string;

    @CreateDateColumn()
    createTime: Date;

    @OneToMany(()=>TypeLabel,typelabel => typelabel.type_label)
    typelabels: number;

}
