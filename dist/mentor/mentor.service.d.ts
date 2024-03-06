import { Mentor } from './mentor.entity';
import { DataFactoryService } from 'src/data-factory/data-factory.service';
export declare class MentorService {
    private dataFactoryService;
    constructor(dataFactoryService: DataFactoryService);
    generateFakeData(): Mentor[];
}
