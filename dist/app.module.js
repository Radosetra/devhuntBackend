"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const profile_service_1 = require("./profile/profile.service");
const profile_controller_1 = require("./profile/profile.controller");
const mentor_service_1 = require("./mentor/mentor.service");
const mentor_controller_1 = require("./mentor/mentor.controller");
const specialisation_service_1 = require("./specialisation/specialisation.service");
const specialisation_controller_1 = require("./specialisation/specialisation.controller");
const typeorm_1 = require("@nestjs/typeorm");
const mentor_entity_1 = require("./mentor/mentor.entity");
const profile_entity_1 = require("./profile/profile.entity");
const specialisation_entity_1 = require("./specialisation/specialisation.entity");

const novice_entity_1 = require("./novice/novice.entity");
const passion_entity_1 = require("./passion/passion.entity");
const novice_module_1 = require("./novice/novice.module");
const passion_module_1 = require("./passion/passion.module");

const data_factory_service_1 = require("./data-factory/data-factory.service");

let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'devhunt',
                entities: [mentor_entity_1.Mentor, profile_entity_1.Profile, specialisation_entity_1.Specialisation, novice_entity_1.Novice, passion_entity_1.Passion],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([profile_entity_1.Profile, mentor_entity_1.Mentor, specialisation_entity_1.Specialisation]),
            novice_module_1.NoviceModule,
            passion_module_1.PassionModule
        ],
        controllers: [app_controller_1.AppController, profile_controller_1.ProfileController, mentor_controller_1.MentorController, specialisation_controller_1.SpecialisationController],
        providers: [app_service_1.AppService, profile_service_1.ProfileService, mentor_service_1.MentorService, specialisation_service_1.SpecialisationService, data_factory_service_1.DataFactoryService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map