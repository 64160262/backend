import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Customer } from 'src/customers/entities/customer.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Promotion } from 'src/promotions/entities/promotion.entity';
import { BookingDetail } from './bookingDetail';
import { Activityper } from 'src/activityper/entities/activityper.entity';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  booking_id: number;

  @CreateDateColumn()
  booking_create_date: Date;

  @Column({ type: 'text' })
  booking_cus_name: string;

  @Column({ type: 'text' })
  booking_cus_lastname: string;

  @Column({ type: 'text' })
  booking_cus_tel: string;

  @Column({ type: 'text' })
  booking_cus_email: string;

  @Column({ type: 'text' })
  booking_cus_addr: string;

  @Column({ type: 'text' })
  booking_cus_addr_des: string;

  @Column({})
  booking_checkin: Date;

  @Column({})
  booking_checkout: Date;
  @Column({ default: 0, nullable: true })
  booking_adult: number;

  @Column({ default: 0, nullable: true })
  booking_child: number;
  @Column({ type: 'real', nullable: true })
  booking_total: number;

  @Column({ default: 0, type: 'real' })
  booking_cash_pledge: number;

  @Column({ default: 0, type: 'real', nullable: true })
  booking_total_discount: number;

  @Column({ default: 'cash', type: 'varchar', length: 255 })
  booking_payment_booking: string;

  @Column({ default: 'cash', type: 'varchar', length: 255, nullable: true })
  booking_payment_checkout: string;

  @Column({
    default: 'Not Comfrim',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  booking_status: string;

  @Column({
    default: 'Not Comfrim',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  booking_status_late: string;

  @UpdateDateColumn()
  updateDate: Date;

  @DeleteDateColumn()
  deleteDate: Date;

  @OneToMany(() => BookingDetail, (bookingDetail) => bookingDetail.booking)
  bookingDetail: BookingDetail[];

  @ManyToOne(() => Customer, (customer) => customer.booking)
  customer: Customer;

  @ManyToOne(() => Employee, (employee) => employee.bookings)
  employee: Employee;

  @ManyToOne(() => Promotion, (promotion) => promotion.booking)
  promotion: Promotion;

  @OneToMany(() => Activityper, (activityPer) => activityPer.booking)
  activityPer: Activityper[];
}
