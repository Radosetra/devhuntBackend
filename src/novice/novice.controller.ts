import { Controller, Get, Param } from '@nestjs/common';
import { SuggestionNovicePassionDto } from './dto/suggestion-novice-passion.dto';
import { ProfileNoviceDto } from './dto/profile-novice.dto';
import { NoviceService } from './novice.service';


@Controller('novice')
export class NoviceController {
    constructor(private readonly noviceService: NoviceService){}

    @Get('/suggestio_list/:matricule')
    async findNovicesWithSamePassion(@Param('matricule') matricule:string): Promise<SuggestionNovicePassionDto[]> {
        return await this.noviceService.findNovicesWithSamePassion(matricule);
    }

    @Get('/profile/:matricule')
    async getNoviceProfil(@Param('matricule') matricule:string): Promise<ProfileNoviceDto>{
        return await this.noviceService.findNoviceByMatricule(matricule)
    }
}