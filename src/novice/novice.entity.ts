import { 
    Entity,
    ManyToMany,
    JoinTable
} from "typeorm";

import { Passion } from "src/passion/passion.entity";
import { Profile } from "src/profile/profile.entity";

@Entity()
export class Novice extends Profile{
    @ManyToMany( () => Passion, (passion) => passion.novices)
    @JoinTable()
    passions: Passion[]

}