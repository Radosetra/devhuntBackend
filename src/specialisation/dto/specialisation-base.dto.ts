import { IsNotEmpty } from "class-validator";

export class SpecialisationBaseDto {
    @IsNotEmpty()
    specId: number;

    @IsNotEmpty()
    specLabel: string;
}