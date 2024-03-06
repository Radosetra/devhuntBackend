import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Novice } from './novice.entity';
import { Passion } from 'src/passion/passion.entity';

import { SuggestionNovicePassionDto } from './dto/suggestion-novice-passion.dto';
import { SuggestionNoviceDto } from './dto/suggestion-novice.dto';
import { SuggestionPassionDto } from './dto/suggestion-passion.dto';
import { DataFactoryService } from 'src/data-factory/data-factory.service';

interface PassionNovices {
    passion: string;
    novices: {
        matricule: string;
        photo: string;
        firstname: string;
        lastname: string;
        parcours: string;
        level: string;
    }[];
}

@Injectable()
export class NoviceService {
    constructor(
        @InjectRepository(Novice)
        private readonly noviceRepository: Repository<Novice>,

        @InjectRepository(Passion)
        private readonly passionRepository: Repository<Passion>,

        private dataFactoryService: DataFactoryService
    ) { }

    findOne(matricule: string) {

    }

    // async findNovicesWithSamePassion(noviceId: number): Promise<SuggestionNovicePassionDto[]> {

    //     // Subquery to select the passions of the specific novice
    //     const passionList = await this.noviceRepository.createQueryBuilder()
    //         .select('passion.passionId', 'passion.label')
    //         .from(Passion, 'passion')
    //         .innerJoin('passion.novices', 'novice')
    //         .where('novice.matricule = :noviceId', { noviceId });

    //     const subquery = await this.noviceRepository.createQueryBuilder()
    //         .select('novice.matricule', 'novice.photo', 'novice.firstname', 'novice.parcours', 'novice.level')
    //         .from(Passion, 'passion')
    //         .innerJoin('passion.novices', 'novice')
    //         .where('novice.matricule = :noviceId', { noviceId });

    //     // Query to select other novices who have the same passions
    //     const novicesWithSamePassion = await this.noviceRepository.createQueryBuilder()
    //         .select('novice')
    //         .from(Novice, 'novice')
    //         .innerJoin('novice.passions', 'passion')
    //         .where('passion.id IN (' + subquery.getQuery() + ')')
    //         .setParameters(subquery.getParameters())
    //         .andWhere('novice.id != :noviceId', { noviceId }) // Exclude the specific novice
    //         .getMany();

    //     return novicesWithSamePassion;
    // }

    // async getPassionsWithNovices(): Promise<PassionNovices[]> {
    //     const connection = getConnection();

    //     const passionNovices: PassionNovices[] = await connection.transaction(async (manager) => {
    //         const passionsWithNovices = await manager.createQueryBuilder(Passion, 'passion')
    //             .leftJoinAndSelect('passion.novices', 'novice')
    //             .getMany();

    //         return passionsWithNovices.map(passion => ({
    //             passion: passion.name,
    //             novices: passion.novices.map(novice => ({
    //                 matricule: novice.matricule,
    //                 photo: novice.photo,
    //                 firstname: novice.firstname,
    //                 lastname: novice.lastname,
    //                 parcours: novice.parcours,
    //                 level: novice.level
    //             }))
    //         }));
    //     });

    //     return passionNovices;
    // }

    async getNoviceForPassion(passionId: number): Promise<SuggestionNoviceDto[]>{
        const novices: SuggestionNoviceDto[] = await this.noviceRepository
            .createQueryBuilder('novice')
            .innerJoin('novice.passions', 'passion')
            .select(['novice.matricule', 'novice.photo', 'novice.firstname', 'novice.lastname', 'novice.parcours', 'novice.level'])
            .where('passion.id = :passionId', { passionId })
            .getRawMany();
        
        return novices;
    }

    async getPassionForNovice(matricule: string): Promise<SuggestionPassionDto[]>{
        const passions: SuggestionPassionDto[] =  await this.noviceRepository
            .createQueryBuilder('novice')
            .innerJoin('novice.passions', 'passion')
            .select(['passion.passionId', 'passion.label'])
            .where('novice.matricule = :matricule', { matricule })
            .getRawMany();

        return passions
    }

    generateFakeNovice(): Novice[] {
        const fakeNovice: Novice[] = [];
        for (let i = 0; i < 10; i++) {
            fakeNovice.push(this.dataFactoryService.createFakeNovice());
        }
        return fakeNovice;
      }
      
}