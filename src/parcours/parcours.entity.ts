import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Profile } from "src/profile/profile.entity";
import { Specialisation } from "src/specialisation/specialisation.entity";

@Entity()
export class Parcours {
    @PrimaryGeneratedColumn()
    parcoursId: number;

    @Column()
    parcoursLabel: string;

    @OneToMany(() => Profile, profile => profile.parcours)
    profiles: Profile[]

    @ManyToMany( () => Specialisation, (specialisation) => specialisation.parcours)
    @JoinTable()
    specialisations: Specialisation[]
}