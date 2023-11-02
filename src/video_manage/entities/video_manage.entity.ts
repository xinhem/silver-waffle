import {Entity,Column,PrimaryGeneratedColumn,CreateDateColumn,} from 'typeorm'

@Entity()
export class VideoManage {

    @PrimaryGeneratedColumn()
    id:number;
    
    @CreateDateColumn({
       comment:'创建时间'
    })
    creatd_id:Date;


    @Column({
        comment:'视频名称',
        type:'varchar'
    })
    video_name:string;

    
}
