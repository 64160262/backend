import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';
import { Customer } from './customers/entities/customer.entity';
import { EmployeesModule } from './employees/employees.module';
import { Employee } from './employees/entities/employee.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { RoomsModule } from './rooms/rooms.module';
import { Room } from './rooms/entities/room.entity';
import { ActivityModule } from './activity/activity.module';
import { Activity } from './activity/entities/activity.entity';
import { RoomserviceModule } from './roomservice/roomservice.module';
import { Roomservice } from './roomservice/entities/roomservice.entity';
import { PromotionsModule } from './promotions/promotions.module';
import { Promotion } from './promotions/entities/promotion.entity';
import { UilityModule } from './uility/uility.module';
import { Uility } from './uility/entities/uility.entity';
import { Brokenequipment } from './brokenequipment/entities/brokenequipment.entity';
import { BrokenequipmentModule } from './brokenequipment/brokenequipment.module';
import { SalaryModule } from './salary/salary.module';
import { Salary } from './salary/entities/salary.entity';
import { CheckinandoutModule } from './checkinandout/checkinandout.module';
import { Checkinandout } from './checkinandout/entities/checkinandout.entity';
import { ReviewsModule } from './reviews/reviews.module';
import { Review } from './reviews/entities/review.entity';
import { ReceiptsModule } from './receipts/receipts.module';
import { Receipt } from './receipts/entities/receipt.entity';
import { ReceiptDetail } from './receipts/entities/receiptdetail.entity';


// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'www.db4free',
//       port: 3600,
//       username: 'hotelcarifornai',
//       password: 'pass@1234',
//       database: 'hotelcarifornai',
//       entities: [Customer],
//       synchronize: true,
//     }),
//     CustomersModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Customer, Employee, User, Room, Activity, Room, Roomservice, Promotion, Uility, Brokenequipment, Salary, Checkinandout, Review, Receipt, ReceiptDetail],
      synchronize: true,
    }),
    CustomersModule,
    EmployeesModule,
    UsersModule,
    RoomsModule,
    ActivityModule,
    RoomserviceModule,
    PromotionsModule,
    UilityModule,
    BrokenequipmentModule,
    SalaryModule,
    CheckinandoutModule,
    ReviewsModule,
    ReceiptsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
