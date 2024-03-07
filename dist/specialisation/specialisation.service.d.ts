import { Repository } from 'typeorm';
import { Specialisation } from './specialisation.entity';
import { ListItemMentorDto } from 'src/mentor/dto/list-item-mentor.dto';
export declare class SpecialisationService {
    private readonly specialisationRepository;
    constructor(specialisationRepository: Repository<Specialisation>);
    findMentorBySpecializationLabel(specLabel: string): Promise<ListItemMentorDto[]>;
}
