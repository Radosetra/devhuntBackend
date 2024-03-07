import { IsNotEmpty } from "class-validator";

export class SuggestionNoviceDto {
    @IsNotEmpty()
    matricule: number;

    @IsNotEmpty()
    photo: string;

    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    parcours: string;

    @IsNotEmpty()
    level: string;
}