import { Mentor } from 'src/mentor/mentor.entity';
import { Profile } from 'src/profile/profile.entity';
import { Specialisation } from 'src/specialisation/specialisation.entity';
export declare class DataFactoryService {
    createFakeProfile(): Profile;
    createFakeMentor(): Mentor;
    createFakeSpecialisation(): Specialisation;
}
