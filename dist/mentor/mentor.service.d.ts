import { Repository } from 'typeorm';
import { Mentor } from './mentor.entity';
import { ProfileMentorDto } from './dto/profil-mentor.dto';
export declare class MentorService {
    private readonly mentorRepository;
    constructor(mentorRepository: Repository<Mentor>);
    findMentorByMatricule(matricule: number): Promise<ProfileMentorDto>;
}
