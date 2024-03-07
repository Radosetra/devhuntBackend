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
exports.MentorController = void 0;
const common_1 = require("@nestjs/common");
const mentor_service_1 = require("./mentor.service");
const novice_service_1 = require("../novice/novice.service");
const specialisation_service_1 = require("../specialisation/specialisation.service");
let MentorController = class MentorController {
    constructor(mentorService, noviceService, specialisationService) {
        this.mentorService = mentorService;
        this.noviceService = noviceService;
        this.specialisationService = specialisationService;
    }
    async findMentorByMatricule(matricule) {
        return await this.mentorService.findMentorByMatricule(matricule);
    }
    async findMentorsByNoviceParcours(noviceMatricule) {
        return await this.noviceService.findMentorsByNoviceParcours(noviceMatricule);
    }
    async findMentorBySpecializationLabel(specLabel) {
        return await this.specialisationService.findMentorBySpecializationLabel(specLabel);
    }
};
exports.MentorController = MentorController;
__decorate([
    (0, common_1.Get)('/search/:matricule'),
    __param(0, (0, common_1.Param)('matricule')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MentorController.prototype, "findMentorByMatricule", null);
__decorate([
    (0, common_1.Get)('/suggestion_list/:matricule'),
    __param(0, (0, common_1.Param)('matricule')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MentorController.prototype, "findMentorsByNoviceParcours", null);
__decorate([
    (0, common_1.Get)('/search_specialisation/:specLabel'),
    __param(0, (0, common_1.Param)('specLabel')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MentorController.prototype, "findMentorBySpecializationLabel", null);
exports.MentorController = MentorController = __decorate([
    (0, common_1.Controller)('mentor'),
    __param(0, (0, common_1.Inject)(mentor_service_1.MentorService)),
    __param(1, (0, common_1.Inject)(novice_service_1.NoviceService)),
    __param(2, (0, common_1.Inject)(specialisation_service_1.SpecialisationService)),
    __metadata("design:paramtypes", [mentor_service_1.MentorService,
        novice_service_1.NoviceService,
        specialisation_service_1.SpecialisationService])
], MentorController);
//# sourceMappingURL=mentor.controller.js.map