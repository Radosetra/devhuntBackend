import { Controller, Get, Param,Inject, Body } from '@nestjs/common';
import { MentorService } from './mentor.service';
import { NoviceService } from 'src/novice/novice.service';
import { SpecialisationService } from 'src/specialisation/specialisation.service';
import { ParcoursService } from 'src/parcours/parcours.service';

import { ProfileMentorDto } from './dto/profil-mentor.dto';

import { ListItemMentorDto } from './dto/list-item-mentor.dto';

import { SuggestionMentor } from './dto/suggestion-mentor.dto';

@Controller('mentor')
export class MentorController {
    constructor(
        @Inject(MentorService) private readonly mentorService: MentorService,
        @Inject(NoviceService) private readonly noviceService: NoviceService,
        @Inject(SpecialisationService) private readonly specialisationService: SpecialisationService,
        @Inject(ParcoursService) private readonly parcoursService: ParcoursService,
    ){}

    @Get('/search/:matricule')
    async findMentorByMatricule(@Param('matricule') matricule:number): Promise<ProfileMentorDto>{
        
        return await this.mentorService.findMentorByMatricule(matricule);
    }

    @Get('/suggestion_list')
    async findMentorsByNoviceParcours(@Body('matricule') noviceMatricule: number): Promise<SuggestionMentor[]> {
        return await this.noviceService.findMentorsByNoviceParcours(noviceMatricule);
    }

    @Get('/search_specialisation')
    async findMentorBySpecializationLabel(@Body('specLabel') specLabel: string): Promise<ListItemMentorDto[]> {
        return await this.specialisationService.findMentorBySpecializationLabel(specLabel);
    }
}
