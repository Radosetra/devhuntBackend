import { 
    Entity,
    ManyToMany,
    JoinTable
} from "typeorm";

import { Passion } from "src/passion/passion.entity";

@Entity()
export class Novice {
    @ManyToMany( () => Passion, (passion) => passion.novices)
    @JoinTable()
    passions: Passion[]

}