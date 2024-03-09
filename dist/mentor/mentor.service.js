"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MentorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const mentor_entity_1 = require("./mentor.entity");
let MentorService = class MentorService {
    constructor(mentorRepository) {
        this.mentorRepository = mentorRepository;
    }
    async findMentorByMatricule(matricule) {
        const query = await this.mentorRepository
            .createQueryBuilder('mentor')
            .leftJoinAndSelect('mentor.specialisation', 'specialisation')
            .leftJoinAndSelect('mentor.parcours', 'parcours')
            .select([
            'mentor.matricule',
            'mentor.firstName',
            'mentor.lastName',
            'parcours.parcoursLabel',
            'mentor.level',
            'mentor.description',
            'mentor.photos',
            'mentor.contact1',
            'mentor.contact2',
            'mentor.contact3',
            'mentor.successStory',
            'parcours.parcoursLabel',
            'specialisation.specLabel',
            'specialisation.description'
        ])
            .where('mentor.matricule = :matricule', { matricule })
            .getOne();
        console.log(query);
        const profileMentor = {
            matricule: query.matricule,
            firstName: query.firstName,
            lastName: query.lastName,
            description: query.description,
            level: query.level,
            parcours: query.parcours.parcoursLabel,
            photos: query.photos,
            contact1: query.contact1,
            contact2: query.contact2,
            contact3: query.contact3,
            successStory: query.successStory,
            specLabel: query.specialisation.specLabel,
            specDescription: query.specialisation.description
        };
        return profileMentor;
    }
};
exports.MentorService = MentorService;
exports.MentorService = MentorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(mentor_entity_1.Mentor)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MentorService);
//# sourceMappingURL=mentor.service.js.map