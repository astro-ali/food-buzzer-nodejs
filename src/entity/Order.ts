import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm"; 
import { Customers } from "./Customers";

@Entity()
export class OrderItem extends BaseEntity{

    @PrimaryGeneratedColumn()
    orderId: number;
    @Column()
    name: String;
    @Column()
    price: String;
    @Column()
    amount:number;

    


    @ManyToOne(OrderItem => Customers, customers => customers.orderItem,{onDelete:"CASCADE"})
    customer: Customers;
 }
