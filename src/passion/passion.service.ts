import { Injectable } from '@nestjs/common';
import { Not, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Passion } from './passion.entity';

import { SuggestionNoviceDto } from 'src/novice/dto/suggestion-novice.dto';
import { notContains } from 'class-validator';
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

    async getNoviceForPassion(passionId: number, matricule: number): Promise<SuggestionNoviceDto[] | []> {
        const resultQuery = await this.passionRepository.find({
            relations: ['novices'],
            where: { 
                passionId: passionId,
                novices: {
                    matricule: Not(matricule) // Excludes novices with IDs in excludedNoviceIds array
                }
            }
        });
        const query: any = resultQuery[0]
        let novices = query?.novices || [];
        if (novices.length !== 0){
            novices = novices.map((novice) =>({
                matricule: novice.matricule,
                photos: novice.photos,
                firstname: novice.firstName,
                lastname: novice.lastName,
                level: novice.level,

            }))
        }
        

        return novices;
    }

    // generateFakePassion(): Passion[] {
    //     const fakePassion: Passion[] = [];
    //     for (let i = 0; i < 10; i++) {
    //         fakePassion.push(this.dataFactoryService.createFakePassion());
    //     }
    //     return fakePassion;
    //   }
}