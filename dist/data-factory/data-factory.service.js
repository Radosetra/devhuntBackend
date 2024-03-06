"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataFactoryService = void 0;
const faker_1 = require("@faker-js/faker");
const common_1 = require("@nestjs/common");
let DataFactoryService = class DataFactoryService {
    createFakeProfile() {
        return {
            matricule: faker_1.faker.string.alphanumeric(),
            firstName: faker_1.faker.person.lastName(),
            lastName: faker_1.faker.person.lastName(),
            parcours: faker_1.faker.lorem.sentence(),
            level: faker_1.faker.string.alphanumeric(),
            description: faker_1.faker.lorem.paragraph(),
            photos: faker_1.faker.image.avatar(),
            contact1: faker_1.faker.phone.number(),
            contact2: faker_1.faker.phone.number(),
            contact3: faker_1.faker.phone.number(),
        };
    }
    createFakeMentor() {
        const fakeProfile = this.createFakeProfile();
        const fakeSpecialisations = Array.from({ length: faker_1.faker.number.int({ min: 1, max: 3 }) }, () => this.createFakeSpecialisation());
        return {
            ...fakeProfile,
            successStory: faker_1.faker.lorem.paragraph(),
            specialisations: fakeSpecialisations,
        };
    }
    createFakeSpecialisation() {
        const fakeMentor = this.createFakeMentor();
        return {
            specId: faker_1.faker.string.alphanumeric(),
            specLabel: faker_1.faker.word.noun(),
            description: faker_1.faker.lorem.sentence(),
            mentor: fakeMentor,
        };
    }
};
exports.DataFactoryService = DataFactoryService;
exports.DataFactoryService = DataFactoryService = __decorate([
    (0, common_1.Injectable)()
], DataFactoryService);
//# sourceMappingURL=data-factory.service.js.map