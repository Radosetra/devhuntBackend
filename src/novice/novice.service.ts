import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Novice } from './novice.entity';

import { SuggestionNovicePassionDto } from './dto/suggestion-novice-passion.dto';
import { SuggestionNoviceDto } from './dto/suggestion-novice.dto';
import { SuggestionPassionDto } from './dto/suggestion-passion.dto';
import { ProfileDto } from 'src/profile/dto/profile.dto';
import { ProfileNoviceDto } from './dto/profile-novice.dto';

@Injectable()
export class NoviceService {
    constructor(
        @InjectRepository(Novice)
        private readonly noviceRepository: Repository<Novice>
    ) { }

    async getNoviceForPassion(passionId: number, matricule: string): Promise<SuggestionNoviceDto[]>{
        const novices: SuggestionNoviceDto[] = await this.noviceRepository
            .createQueryBuilder('novice')
            .innerJoin('novice.passions', 'passion')
            .select(['novice.matricule', 'novice.photo', 'novice.firstname', 'novice.lastname', 'novice.parcours', 'novice.level'])
            .where('passion.id = :passionId', { passionId })
            .andWhere('novice.matricule != :matricule', { matricule })
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
    
    async findNovicesWithSamePassion(matricule: string): Promise<SuggestionNovicePassionDto[]> {
        const passions: SuggestionPassionDto[] = await this.getPassionForNovice(matricule)
        const novicesList: SuggestionNovicePassionDto[] = await Promise.all(passions.map(async (passion) => ({
            passion: passion.label,
            novices: await this.getNoviceForPassion(passion.passionId, matricule)
        })));

        return novicesList
    }

    async findNoviceByMatricule(matricule: string): Promise<ProfileNoviceDto>{
        const novice:ProfileDto = await this.noviceRepository
            .createQueryBuilder('novice')
            .select([
                'novice.matricule', 
                'novice.firstName', 
                'novice.lastName', 
                'novice.parcours', 
                'novice.level', 
                'novice.description', 
                'novice.photos', 
                'novice.contact1', 
                'novice.contact2', 
                'novice.contact3'])
            .where('novice.matricule = :matricule', { matricule })
            .getOne();
        
        const passionsList:SuggestionPassionDto[] = await this.getPassionForNovice(matricule)

        let noviceProfile: ProfileNoviceDto;
        noviceProfile = {
            ...novice, 
            passions:passionsList};

        return noviceProfile;
    }
}