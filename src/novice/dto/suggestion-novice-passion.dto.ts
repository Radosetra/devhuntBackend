import { IsNotEmpty } from "class-validator";
import { SuggestionNoviceDto } from "./suggestion-novice.dto";

export class SuggestionNovicePassionDto {
    @IsNotEmpty()
    passion: string;

    novices: SuggestionNoviceDto[]
}

