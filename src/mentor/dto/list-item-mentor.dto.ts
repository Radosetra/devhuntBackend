import { IsNotEmpty } from "class-validator";

export class ListItemMentorDto {
    @IsNotEmpty()
    matricule: number;

    @IsNotEmpty()
    photos: string;

    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    specLabel: string;
}