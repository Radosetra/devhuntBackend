import { Mentor } from "src/mentor/mentor.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Specialisation {
    @PrimaryGeneratedColumn()
    specId: number;

    @Column({nullable: false})
    specLabel: string;

    @Column({type: 'text', nullable: false})
    description: string;

   @ManyToOne( () => Mentor, mentor => mentor.specialisation)
   mentor: Mentor;
}