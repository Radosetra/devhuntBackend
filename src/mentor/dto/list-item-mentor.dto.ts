import { IsNotEmpty } from "class-validator";

export class ListItemMentorDto {
    @IsNotEmpty()
    matricule: string;

    @IsNotEmpty()
    photos: string;

    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    specialisation: string;
}