import { MentorService } from './mentor.service';
import { NoviceService } from 'src/novice/novice.service';
import { SpecialisationService } from 'src/specialisation/specialisation.service';
import { ProfileMentorDto } from './dto/profil-mentor.dto';
import { ListItemMentorDto } from './dto/list-item-mentor.dto';
export declare class MentorController {
    private readonly mentorService;
    private readonly noviceService;
    private readonly specialisationService;
    constructor(mentorService: MentorService, noviceService: NoviceService, specialisationService: SpecialisationService);
    findMentorByMatricule(matricule: number): Promise<ProfileMentorDto>;
    findMentorsByNoviceParcours(noviceMatricule: number): Promise<ListItemMentorDto[]>;
    findMentorBySpecializationLabel(specLabel: string): Promise<ListItemMentorDto[]>;
}
