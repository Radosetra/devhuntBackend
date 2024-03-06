import { IsNotEmpty } from "class-validator";

export class SuggestionPassionDto {
    @IsNotEmpty()
    passionId: number;

    @IsNotEmpty()
    label: string;
}