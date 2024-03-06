import { Mentor } from "src/mentor/mentor.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Specialisation {
    @PrimaryGeneratedColumn()
    specId: string;

    @Column({nullable: false})
    specLabel: string;

    @Column({type : 'text',nullable: true})
    description: string;

    @OneToMany( () => Mentor, mentor => mentor.specialisations)
    mentor: Mentor;
}