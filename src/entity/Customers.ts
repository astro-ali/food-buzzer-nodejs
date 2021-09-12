import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, Timestamp, OneToMany, CreateDateColumn} from "typeorm"; 
import { OrderItem } from "./Order";

@Entity()
export class Customers extends BaseEntity{

    @PrimaryGeneratedColumn()
    CustomerId: number;
    @Column()
    CustomerName: String;  
    @Column()
    phone: string;
    @Column()
    total_cost: string;
    @Column({default:false})
    notified: boolean;
    @CreateDateColumn()
    CreatedAt:Date;
 
    @OneToMany(type => OrderItem, orderItem => orderItem.customer,{cascade:true})
    orderItem: OrderItem[];

}