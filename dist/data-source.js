"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const mentor_entity_1 = require("./mentor/mentor.entity");
const profile_entity_1 = require("./profile/profile.entity");
const specialisation_entity_1 = require("./specialisation/specialisation.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'devhunt',
    entities: [mentor_entity_1.Mentor, profile_entity_1.Profile, specialisation_entity_1.Specialisation],
    synchronize: true,
});
//# sourceMappingURL=data-source.js.map