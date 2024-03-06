import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Mentor } from './mentor.entity';


@Injectable()
export class MentorService {
    constructor(
        @InjectRepository(Mentor)
        private readonly mentorRepository: Repository<Mentor>
    ){}

    async getListMentors(): Promise<ListItemMentorDto[]>{
        
    }

    async findMentorByMatricule(matricule: string) {

    }
}
