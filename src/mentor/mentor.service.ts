import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Mentor } from './mentor.entity';
import { DataFactoryService } from 'src/data-factory/data-factory.service';


@Injectable()
export class MentorService {
    constructor(
        @InjectRepository(Mentor)
        private readonly mentorRepository: Repository<Mentor>
         
        private dataFactoryService: DataFactoryService
    ){}

    async getListMentors(): Promise<ListItemMentorDto[]>{
        
    }

    async findMentorByMatricule(matricule: string) {
    }
    
    generateFakeData(): Mentor[] {
        const fakeMentors: Mentor[] = [];
        for (let i = 0; i < 10; i++) {
        fakeMentors.push(this.dataFactoryService.createFakeMentor());
        }
        return fakeMentors;
    }

}
