import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    matricule: string;

    @Column({nullable: false})
    firstName: string;

    @Column({nullable: false})
    lastName: string;
    
    @Column({nullable: false})
    parcours: string;

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
}