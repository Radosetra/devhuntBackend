import { Controller, Get, Param, Body } from '@nestjs/common';
import { SuggestionNovicePassionDto } from './dto/suggestion-novice-passion.dto';
import { ProfileNoviceDto } from './dto/profile-novice.dto';
import { NoviceService } from './novice.service';


@Controller('novice')
export class NoviceController {
    constructor(private readonly noviceService: NoviceService){}

    @Get('/suggestion_list')
    async findNovicesWithSamePassion(@Body('matricule') matricule:number): Promise<SuggestionNovicePassionDto[]> {
        return await this.noviceService.findNovicesWithSamePassion(matricule);
    }

    @Get('/profile/:matricule')
    async getNoviceProfil(@Param('matricule') matricule:number): Promise<ProfileNoviceDto>{
        return await this.noviceService.findNoviceByMatricule(matricule)
    }
}