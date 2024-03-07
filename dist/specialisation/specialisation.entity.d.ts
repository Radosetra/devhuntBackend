import { Mentor } from "src/mentor/mentor.entity";
import { Parcours } from "src/parcours/parcours.entity";
export declare class Specialisation {
    specId: number;
    specLabel: string;
    description: string;
    mentors: Mentor[];
    parcours: Parcours[];
}
