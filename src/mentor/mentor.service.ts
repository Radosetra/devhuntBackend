import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Mentor } from './mentor.entity';
// import { DataFactoryService } from 'src/data-factory/data-factory.service';

import { ProfileMentorDto } from './dto/profil-mentor.dto';


@Injectable()
export class MentorService {
    constructor(
        @InjectRepository(Mentor)
        private readonly mentorRepository: Repository<Mentor>,
        // private dataFactoryService: DataFactoryService
    ) { }

    // async getListMentors(): Promise<ListItemMentorDto[]>{

    // }

    // async findMentorByMatricule(matricule: string) {
    // }

    // generateFakeData(): Mentor[] {
    //     const fakeMentors: Mentor[] = [];
    //     for (let i = 0; i < 10; i++) {
    //     fakeMentors.push(this.dataFactoryService.createFakeMentor());
    //     }
    //     return fakeMentors;
    // }

    async findMentorByMatricule(matricule: number): Promise<ProfileMentorDto> {
        const query:any = await this.mentorRepository
            .createQueryBuilder('mentor')
            // Eagerly load the specialisation relationship
            .leftJoinAndSelect('mentor.specialisation', 'specialisation')
            // **Join the parcours table of Mentor**
            .leftJoinAndSelect('mentor.parcours', 'parcours')
            // Select all fields from both Mentor and Specialisation
            .select([
                'mentor.matricule',
                'mentor.firstName',
                'mentor.lastName',
                'parcours.parcoursLabel',
                'mentor.level',
                'mentor.description',
                'mentor.photos',
                'mentor.contact1',
                'mentor.contact2',
                'mentor.contact3',
                'mentor.successStory',
                'parcours.parcoursLabel',
                'specialisation.specLabel',
                'specialisation.description' as 'specDescription'
            ])
            .where('mentor.matricule = :matricule', { matricule })
            .getOne();
        console.log(query);
        

        const profileMentor: ProfileMentorDto = {
            matricule: query.matricule,
            firstName: query.firstName,
            lastName: query.lastName,
            description: query.description,
            level: query.level,
            parcours: query.parcours.parcoursLabel,
            photos: query.photos,
            contact1: query.contact1,
            contact2: query.contact2,
            contact3: query.contact3,
            successStory: query.successStory,
            specLabel: query.specialisation.specLabel,
            specDescription: query.specialisation.description
        };

        return profileMentor;
    }

}
