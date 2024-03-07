import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Specialisation } from './specialisation.entity';
// import { DataFactoryService } from 'src/data-factory/data-factory.service';
import { ListItemMentorDto } from 'src/mentor/dto/list-item-mentor.dto';

@Injectable()
export class SpecialisationService {
    constructor(
        @InjectRepository(Specialisation)
        private readonly specialisationRepository: Repository<Specialisation>
         
        // private dataFactoryService: DataFactoryService
    ){}
  
    // generateFakeData(): Specialisation[] {
    //       const fakeSpecialisations: Specialisation[] = [];
    //       for (let i = 0; i < 10; i++) {
    //           fakeSpecialisations.push(this.dataFactoryService.createFakeSpecialisation());
    //       }
    //       return fakeSpecialisations;
    //   }

    async findMentorBySpecializationLabel(specLabel: string): Promise<ListItemMentorDto[]> {
        const query:any[] = await this.specialisationRepository
      .createQueryBuilder('specialisation')
      // Eagerly load the mentors relationship
      .leftJoinAndSelect('specialisation.mentors', 'mentor')
      // Filter by specialisation label
      .where('specialisation.specLabel LIKE :specLabel', { specLabel: `%${specLabel}%` })
      // Select only mentors
      .select([
        'mentor.matricule',
        'mentor.firstName',
        'mentor.lastName',
        'mentor.photos',
        'specialisation.specLabel',
        ])
        .getMany();

        const mentorsDto: ListItemMentorDto[] = query.map((mentorData) => ({
            matricule: mentorData.matricule,
            photos: mentorData.photos,
            firstname: mentorData.firstName,
            lastname: mentorData.lastName,
            specLabel: mentorData.specLabel,
        }));

    return mentorsDto;
    }
}
