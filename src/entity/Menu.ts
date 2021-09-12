import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn, OneToOne, OneToMany} from "typeorm"; 
import { Categories } from "./Categories";
import { OrderItem } from "./Order";

@Entity()
export class Menu extends BaseEntity{

    @PrimaryGeneratedColumn()
    foodId: number;
    @Column()
    foodName: string;
    @Column()
    foodPrice: string;

    
    @ManyToOne(type => Categories, categories => categories.item)
    categoriesID: Categories;
        // Menu Realtion with CategoriesID Table//
}
