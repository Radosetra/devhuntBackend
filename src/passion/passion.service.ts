import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Passion } from './passion.entity';

@Injectable()
export class PassionService {
    constructor(
        @InjectRepository(Passion)
        private readonly passionRepository: Repository<Passion>
    ){}

    findOne(matricule: string){
        
    }
}