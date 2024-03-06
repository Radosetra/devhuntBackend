import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable
} from "typeorm";
import { Novice } from "src/novice/novice.entity";

@Entity()
export class Passion {
    @PrimaryGeneratedColumn()
    passionId: number

    @Column()
    label: string

    @ManyToMany( () => Novice, (novice) => novice.passions)
    @JoinTable()
    novices: Novice[]
}