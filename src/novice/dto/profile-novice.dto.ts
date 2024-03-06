import { IsNotEmpty } from "class-validator";
import { ProfileDto } from "src/profile/dto/profile.dto";
import { SuggestionPassionDto } from "./suggestion-passion.dto";

export class ProfileNoviceDto extends ProfileDto {
    @IsNotEmpty()
    passions: SuggestionPassionDto[]
}