import { MentorService } from './mentor.service';
import { NoviceService } from 'src/novice/novice.service';
import { SpecialisationService } from 'src/specialisation/specialisation.service';
import { ParcoursService } from 'src/parcours/parcours.service';
import { ProfileMentorDto } from './dto/profil-mentor.dto';
import { ListItemMentorDto } from './dto/list-item-mentor.dto';
import { SuggestionMentor } from './dto/suggestion-mentor.dto';
export declare class MentorController {
    private readonly mentorService;
    private readonly noviceService;
    private readonly specialisationService;
    private readonly parcoursService;
    constructor(mentorService: MentorService, noviceService: NoviceService, specialisationService: SpecialisationService, parcoursService: ParcoursService);
    findMentorByMatricule(matricule: number): Promise<ProfileMentorDto>;
    findMentorsByNoviceParcours(noviceMatricule: number): Promise<SuggestionMentor[]>;
    findMentorBySpecializationLabel(specLabel: string): Promise<ListItemMentorDto[]>;
}
