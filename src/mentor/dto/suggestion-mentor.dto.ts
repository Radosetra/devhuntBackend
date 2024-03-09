import { IsNotEmpty } from "class-validator";
import { ListItemMentorDto } from "./list-item-mentor.dto";

export class SuggestionMentor {
    specialisation: string;

    mentors: ListItemMentorDto[];
}