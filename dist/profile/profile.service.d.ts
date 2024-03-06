import { Profile } from './profile.entity';
import { DataFactoryService } from 'src/data-factory/data-factory.service';
export declare class ProfileService {
    private dataFactoryService;
    constructor(dataFactoryService: DataFactoryService);
    generateFakeData(): Profile[];
}
