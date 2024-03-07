import { Mentor } from "src/mentor/mentor.entity";
import { Parcours } from "src/parcours/parcours.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Specialisation {
    @PrimaryGeneratedColumn()
    specId: number;

    @Column({nullable: false})
    specLabel: string;

    @Column({type : 'text',nullable: true})
    description: string;

    @OneToMany( () => Mentor, mentor => mentor.specialisation)
    mentors: Mentor[];

    @ManyToMany( () => Parcours, (parcours) => parcours.specialisations)
    @JoinTable()
    parcours: Parcours[]
}