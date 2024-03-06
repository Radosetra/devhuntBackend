import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { Mentor } from 'src/mentor/mentor.entity';
import { Novice } from 'src/novice/novice.entity';
import { Passion } from 'src/passion/passion.entity';
import { Profile } from 'src/profile/profile.entity';
import { Specialisation } from 'src/specialisation/specialisation.entity';

@Injectable()
export class DataFactoryService {

    createFakeProfile(): Profile {
        return {
            matricule: faker.string.alphanumeric(),
            firstName: faker.person.lastName(),
            lastName: faker.person.lastName(),
            parcours: faker.lorem.sentence(),
            level: faker.string.alphanumeric(),
            description: faker.lorem.paragraph(),
            photos: faker.image.avatar(),
            contact1: faker.phone.number(),
            contact2: faker.phone.number(),
            contact3: faker.phone.number(),
        };
    }
    

    createFakeMentor(): Mentor {
        const fakeProfile = this.createFakeProfile();
        const fakeSpecialisations = Array.from(
          { length: faker.number.int({ min: 1, max: 3 }) },
          () => this.createFakeSpecialisation(),
        );
    
        return {
          ...fakeProfile,
          successStory: faker.lorem.paragraph(),
          specialisations: fakeSpecialisations,
        };
    }

    createFakeSpecialisation(): Specialisation {
    const fakeMentor = this.createFakeMentor();
        return {
            specId: faker.string.alphanumeric(),
            specLabel: faker.word.noun(),
            description: faker.lorem.sentence(),
            mentor: fakeMentor, 
        };
    }

    createFakePassion(): Passion {
            return {
                passionId: faker.number.int(),
                label: faker.word.words(),
                novices: []
                
            };
        }

    createFakeNovice(): Novice {
            return {
                passions : []
            };
        }
    
}

