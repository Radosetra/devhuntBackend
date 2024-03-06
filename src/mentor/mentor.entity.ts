import { Profile } from "src/profile/profile.entity";
import { Specialisation } from "src/specialisation/specialisation.entity";
import { ChildEntity, Column, Entity, OneToMany } from "typeorm";

@Entity()
export class Mentor extends Profile {

    @Column()
    successStory: string;

    @OneToMany(() => Specialisation, specialisation => specialisation.mentor )
    specialisations: Specialisation[];
}