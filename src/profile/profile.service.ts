import { Injectable } from '@nestjs/common';
import { Profile } from './profile.entity';
// import { DataFactoryService } from 'src/data-factory/data-factory.service';

@Injectable()
export class ProfileService {
    constructor(
      // private dataFactoryService: DataFactoryService
      ) {}

    // generateFakeData(): Profile[] {
    //   const fakeProfile: Profile[] = [];
    //   for (let i = 0; i < 10; i++) {
    //     fakeProfile.push(this.dataFactoryService.createFakeProfile());
    //   }
    //   return fakeProfile;
    // }
}
