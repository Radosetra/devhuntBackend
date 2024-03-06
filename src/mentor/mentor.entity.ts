import { Profile } from "src/profile/profile.enitity";
import { Specialisation } from "src/specialisation/specialisation.entity";
import { ChildEntity, Column, OneToMany } from "typeorm";

@ChildEntity()
export class Mentor extends Profile {

    @Column({type:'text', nullable:true})
    successStory: string;

    @OneToMany( () => Specialisation, specialisation => specialisation.mentor )
    specialisation: Specialisation[];
}