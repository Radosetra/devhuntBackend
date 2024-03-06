import { Injectable } from '@nestjs/common';
import { Mentor } from './mentor.entity';
import { DataFactoryService } from 'src/data-factory/data-factory.service';

@Injectable()
export class MentorService {
    constructor(private dataFactoryService: DataFactoryService) {}

    generateFakeData(): Mentor[] {
        const fakeMentors: Mentor[] = [];
        for (let i = 0; i < 10; i++) {
        fakeMentors.push(this.dataFactoryService.createFakeMentor());
        }
        return fakeMentors;
    }
}
