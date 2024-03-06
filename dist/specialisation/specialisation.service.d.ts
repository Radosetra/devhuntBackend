import { Specialisation } from './specialisation.entity';
import { DataFactoryService } from 'src/data-factory/data-factory.service';
export declare class SpecialisationService {
    private dataFactoryService;
    constructor(dataFactoryService: DataFactoryService);
    generateFakeData(): Specialisation[];
}
