import { Entity, PrimaryColumn , Column,OneToOne ,JoinColumn} from "typeorm";

@Entity()
export class Room {
  @PrimaryColumn()
  room_id: number;

  @Column()
  room_type: string;

  @Column()
  room_des: string;

  @Column()
  room_bed_size: string;

  @Column()
  room_status: string;

}
