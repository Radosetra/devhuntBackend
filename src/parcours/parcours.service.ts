import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Parcours } from './parcours.entity';

import { SpecialisationService } from 'src/specialisation/specialisation.service';

import { SuggestionMentor } from 'src/mentor/dto/suggestion-mentor.dto';

@Injectable()
export class ParcoursService {
    constructor(
        @InjectRepository(Parcours)
        private readonly parcoursRepository: Repository<Parcours>,
        private readonly specialisationRepository: SpecialisationService
         
        // private dataFactoryService: DataFactoryService
    ){}

    async findAllSpecialisations(parcoursId: number){
        const query = await this.parcoursRepository.find({
            relations:['specialisations'],
            where: {
                parcoursId: parcoursId
            }
        })
        let specialisations = query[0]?.specialisations || []
        
        const listMentors:any = await Promise.all(specialisations.map(async (specialisation) => ({
            specialisation : specialisation.specLabel,
            mentors: await this.specialisationRepository.findAllMentorsByParcours(specialisation.specId)
        })))

        // console.log(listMentors);

        return listMentors
        
    }
}