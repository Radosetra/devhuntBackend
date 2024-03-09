import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Novice } from './novice.entity';

import { SuggestionNovicePassionDto } from './dto/suggestion-novice-passion.dto';
import { SuggestionNoviceDto } from './dto/suggestion-novice.dto';
import { SuggestionPassionDto } from './dto/suggestion-passion.dto';
import { SuggestionMentor } from 'src/mentor/dto/suggestion-mentor.dto';

import { ProfileDto } from 'src/profile/dto/profile.dto';
import { ProfileNoviceDto } from './dto/profile-novice.dto';

import { ListItemMentorDto } from 'src/mentor/dto/list-item-mentor.dto';

import { PassionService } from 'src/passion/passion.service';

import { ParcoursService } from 'src/parcours/parcours.service';

// import { DataFactoryService } from 'src/data-factory/data-factory.service';

@Injectable()
export class NoviceService {
    constructor(
        @InjectRepository(Novice)
        private readonly noviceRepository: Repository<Novice>,
        private readonly passionService: PassionService,
        private readonly parcoursService: ParcoursService,


        // private dataFactoryService: DataFactoryService
    ) { }

    // async getNoviceForPassion(passionId: number, matricule: number): Promise<SuggestionNoviceDto[]> {
    //     // const novices: SuggestionNoviceDto[] = await this.noviceRepository
    //     //     .createQueryBuilder('novice')
    //     //     .innerJoin('novice.passions', 'passion')
    //     //     .select(['novice.matricule', 'novice.photo', 'novice.firstname', 'novice.lastname', 'novice.parcours', 'novice.level'])
    //     //     .where('passion.passionId = :passionId', { passionId })
    //     //     .andWhere('novice.matricule != :matricule', { matricule })
    //     //     .getRawMany();
    //     // const novices: SuggestionNoviceDto[] = await this.noviceRepository.find({
    //     //     select: ['matricule', 'photo', 'firstname', 'lastname', 'parcours', 'level'],
    //     //     join: {
    //     //         alias: 'novice',
    //     //         innerJoinAndSelect: {
    //     //             passions: 'novice.passions'
    //     //         }
    //     //     },
    //     //     where: (qb) => {
    //     //         qb.where('passions.passionId = :passionId', { passionId })
    //     //             .andWhere('novice.matricule != :matricule', { matricule });
    //     //     }
    //     // });

    //     return novices;
    // }

    async getPassionForNovice(matricule: number): Promise<SuggestionPassionDto[]> {
        const resultQuery = await this.noviceRepository.find({
            relations: ['passions'],
            where: { matricule: matricule }
        });
        const passions: SuggestionPassionDto[] = resultQuery[0].passions
        
        return passions;
    }


    async findNovicesWithSamePassion(matricule: number): Promise<SuggestionNovicePassionDto[]> {
        const passions: SuggestionPassionDto[] = await this.getPassionForNovice(matricule)
        const novicesList: SuggestionNovicePassionDto[] = await Promise.all(passions.map(async (passion) => ({
            passion: passion.label,
            novices: await this.passionService.getNoviceForPassion(passion.passionId, matricule)
        })));

        return novicesList
    }

    async findNoviceByMatricule(matricule: number): Promise<ProfileNoviceDto> {
        const novice:any = await this.noviceRepository
            .createQueryBuilder('novice')
            .leftJoinAndSelect('novice.parcours', 'parcours')
            .select([
                'novice.matricule',
                'novice.firstName',
                'novice.lastName',
                'parcours.parcoursLabel',
                'novice.level',
                'novice.description',
                'novice.photos',
                'novice.contact1',
                'novice.contact2',
                'novice.contact3'])
            .where('novice.matricule = :matricule', { matricule })
            .getOne();

        const passionsList: SuggestionPassionDto[]= await this.getPassionForNovice(matricule)
        // console.log(passionsList);
        

        let noviceProfile: ProfileNoviceDto;
        noviceProfile = {
            matricule: novice.matricule,
            firstName: novice.firstName,
            lastName: novice.lastName,
            description: novice.description,
            level: novice.level,
            parcours: novice.parcours.parcoursLabel,
            photos: novice.photos,
            contact1: novice.contact1,
            contact2: novice.contact2,
            contact3: novice.contact3,
            passions: passionsList
        };

        return noviceProfile;
    }

    async findMentorsByNoviceParcours(noviceMatricule: number): Promise<SuggestionMentor[]> {
        
        const queryResult:any = await this.noviceRepository.find({
            relations: ['parcours'],
            where: { 
                matricule: noviceMatricule
            }
        })
        const parcoursId = queryResult[0].parcoursId
        const specialisations:SuggestionMentor[] = await this.parcoursService.findAllSpecialisations(parcoursId);
        console.log("Final");
        
        console.log(specialisations);
        

        // const mentorsDto: ListItemMentorDto[] = queryResult.map((mentorData) => ({
        //     matricule: mentorData.matricule,
        //     photos: mentorData.photos,
        //     firstname: mentorData.firstName,
        //     lastname: mentorData.lastName,
        //     // specLabel: mentorData.specLabel,
        // }));

        return specialisations;
    }



    // generateFakeNovice(): Novice[] {
    //     const fakeNovice: Novice[] = [];
    //     for (let i = 0; i < 10; i++) {
    //         fakeNovice.push(this.dataFactoryService.createFakeNovice());
    //     }
    //     return fakeNovice;
    //   }

}