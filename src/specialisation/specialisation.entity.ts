import { Mentor } from "src/mentor/mentor.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Specialisation {
    @PrimaryGeneratedColumn()
    specId: number;

    @Column({nullable: false})
    specLabel: string;

    @Column({type : 'text',nullable: true})
    description: string;

   @ManyToOne( () => Mentor, mentor => mentor.specialisations)
   mentor: Mentor;
}