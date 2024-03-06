import { IsNotEmpty } from "class-validator";

export class ProfileDto {
    @IsNotEmpty()
    matricule: number;

    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    photos: string;

    @IsNotEmpty()
    contact1: string;

    @IsNotEmpty()
    contact2: string;

    @IsNotEmpty()
    contact3: string;
}