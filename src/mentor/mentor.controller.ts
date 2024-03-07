import { Controller, Get, Param,Inject } from '@nestjs/common';
import { MentorService } from './mentor.service';
import { NoviceService } from 'src/novice/novice.service';
import { SpecialisationService } from 'src/specialisation/specialisation.service';

import { ProfileMentorDto } from './dto/profil-mentor.dto';

import { ListItemMentorDto } from './dto/list-item-mentor.dto';

@Controller('mentor')
export class MentorController {
    constructor(
        @Inject(MentorService) private readonly mentorService: MentorService,
        @Inject(NoviceService) private readonly noviceService: NoviceService,
        @Inject(SpecialisationService) private readonly specialisationService: SpecialisationService,
    ){}

    @Get('/search/:matricule')
    async findMentorByMatricule(@Param('matricule') matricule:number): Promise<ProfileMentorDto>{
        return await this.mentorService.findMentorByMatricule(matricule);
    }

    @Get('/suggestion_list/:matricule')
    async findMentorsByNoviceParcours(@Param('matricule') noviceMatricule: number): Promise<ListItemMentorDto[]> {
        return await this.noviceService.findMentorsByNoviceParcours(noviceMatricule);
    }

    @Get('/search_specialisation/:specLabel')
    async findMentorBySpecializationLabel(@Param('specLabel') specLabel: string): Promise<ListItemMentorDto[]> {
        return await this.specialisationService.findMentorBySpecializationLabel(specLabel);
    }
}
