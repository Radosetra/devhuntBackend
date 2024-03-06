import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Specialisation } from './specialisation.entity';

@Injectable()
export class SpecialisationService {
    constructor(
        @InjectRepository(Specialisation)
        private readonly specialisationRepository: Repository<Specialisation>
    ){}

}
