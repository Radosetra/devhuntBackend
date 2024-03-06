import { IsNotEmpty } from "class-validator";
import { SpecialisationBaseDto } from "./specialisation-base.dto";

export class SpecialisationDto extends SpecialisationBaseDto {
    @IsNotEmpty()
    description: string;
}