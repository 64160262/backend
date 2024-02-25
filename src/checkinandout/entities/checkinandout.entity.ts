import { Employee } from 'src/employees/entities/employee.entity';
import { Salary } from 'src/salary/entities/salary.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Checkinandout {
  @PrimaryGeneratedColumn()
  cio_id: number;

  @Column()
  cio_date: Date;

  @Column({ type: 'time' })
  cio_time_in: string;

  @Column({ type: 'time' })
  cio_time_out: string;

  @Column()
  cio_total_hour: number;

  @Column({ nullable: true, type: 'text' })
  cio_paid_status: string;

  @UpdateDateColumn()
  updateDate: Date;

  @DeleteDateColumn()
  deleteDate: Date;

  @ManyToOne(() => Salary, (salary) => salary.checkinandout)
  salary: Salary;

  @ManyToOne(() => Employee, (employee) => employee.checkinandout)
  employee: Employee;
}
