import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToMany} from "typeorm"; 
import { OrderItem } from "./Order";

@Entity()
export class Customers extends BaseEntity{

    @PrimaryGeneratedColumn()
    CustomerId: number;
    @Column()
    phone: string;
    @Column()
    total_cost: string;
    @Column()
    notified: boolean;
    @Column()
    CreatedAt:Date;
 
    @OneToMany(type => OrderItem, orderItem => orderItem.customer,{cascade:true})
    orderItem: OrderItem[];

}