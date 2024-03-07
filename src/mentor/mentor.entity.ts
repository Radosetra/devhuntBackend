import { Profile } from "src/profile/profile.entity";
import { Specialisation } from "src/specialisation/specialisation.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class Mentor extends Profile {

    @Column()
    successStory: string;

    @ManyToOne(() => Specialisation, specialisation => specialisation.mentors )
    specialisation: Specialisation;
}