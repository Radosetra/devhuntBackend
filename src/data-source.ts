import { DataSource } from "typeorm";
import { Mentor } from "./mentor/mentor.entity";
import { Profile } from "./profile/profile.entity";
import { Specialisation } from "./specialisation/specialisation.entity";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'devhunt',
    entities: [Mentor, Profile, Specialisation],
    synchronize: true,
});