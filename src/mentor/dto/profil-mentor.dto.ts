import { IsNotEmpty } from "class-validator";
import { ProfileDto } from "src/profile/dto/profile.dto";

export class ProfileMentorDto extends ProfileDto {
    successStory: string;

    @IsNotEmpty()
    specLabel: string;

    @IsNotEmpty()
    specDescription: string;
}