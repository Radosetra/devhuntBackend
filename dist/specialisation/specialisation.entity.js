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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Specialisation = void 0;
const mentor_entity_1 = require("../mentor/mentor.entity");
const parcours_entity_1 = require("../parcours/parcours.entity");
const typeorm_1 = require("typeorm");
let Specialisation = class Specialisation {
};
exports.Specialisation = Specialisation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Specialisation.prototype, "specId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Specialisation.prototype, "specLabel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Specialisation.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => mentor_entity_1.Mentor, mentor => mentor.specialisation),
    __metadata("design:type", Array)
], Specialisation.prototype, "mentors", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => parcours_entity_1.Parcours, (parcours) => parcours.specialisations),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Specialisation.prototype, "parcours", void 0);
exports.Specialisation = Specialisation = __decorate([
    (0, typeorm_1.Entity)()
], Specialisation);
//# sourceMappingURL=specialisation.entity.js.map