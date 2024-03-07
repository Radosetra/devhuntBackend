import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Parcours } from "src/parcours/parcours.entity";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    matricule: number;

    @Column({nullable: false})
    firstName: string;

    @Column({nullable: false})
    lastName: string;
    
    // @Column({nullable: false})
    // parcours: string;

    @Column({nullable: false})
    level: string;

    @Column({type: 'text', nullable: false})
    description: string;

    @Column({nullable: true})
    photos: string;

    @Column({nullable: false})
    contact1: string;

    @Column({nullable: true})
    contact2: string;

    @Column({nullable: true})
    contact3: string;

    @ManyToOne(() => Parcours, (parcours) => parcours.profiles)
    parcours: Parcours
}