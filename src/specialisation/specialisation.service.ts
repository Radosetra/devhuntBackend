import { Injectable } from '@nestjs/common';
import { Specialisation } from './specialisation.entity';
import { DataFactoryService } from 'src/data-factory/data-factory.service';

@Injectable()
export class SpecialisationService {

    constructor(private dataFactoryService: DataFactoryService) {}

    generateFakeData(): Specialisation[] {
        const fakeSpecialisations: Specialisation[] = [];
        for (let i = 0; i < 10; i++) {
            fakeSpecialisations.push(this.dataFactoryService.createFakeSpecialisation());
        }
        return fakeSpecialisations;
    }
}
