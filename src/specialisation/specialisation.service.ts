import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Specialisation } from './specialisation.entity';

@Injectable()
export class SpecialisationService {
    constructor(
        @InjectRepository(Specialisation)
        private readonly specialisationRepository: Repository<Specialisation>,
         
        private dataFactoryService: DataFactoryService
    ){}
  
    generateFakeData(): Specialisation[] {
          const fakeSpecialisations: Specialisation[] = [];
          for (let i = 0; i < 10; i++) {
              fakeSpecialisations.push(this.dataFactoryService.createFakeSpecialisation());
          }
          return fakeSpecialisations;
      }
}
