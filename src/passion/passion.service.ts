import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Passion } from './passion.entity';
// import { DataFactoryService } from 'src/data-factory/data-factory.service';

@Injectable()
export class PassionService {
    constructor(
        @InjectRepository(Passion)
        private readonly passionRepository: Repository<Passion>
        // private dataFactoryService: DataFactoryService
    ){}

    findOne(matricule: string){
        
    }

    // generateFakePassion(): Passion[] {
    //     const fakePassion: Passion[] = [];
    //     for (let i = 0; i < 10; i++) {
    //         fakePassion.push(this.dataFactoryService.createFakePassion());
    //     }
    //     return fakePassion;
    //   }
}