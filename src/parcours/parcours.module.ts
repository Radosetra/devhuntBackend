import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Parcours } from "./parcours.entity";
import { ParcoursService } from "./parcours.service";

import { SpecialisationModule } from "src/specialisation/specialisation.module";

@Module({
    imports: [TypeOrmModule.forFeature([Parcours]), SpecialisationModule],
    controllers: [],
    providers: [ParcoursService],
    exports: [ParcoursService]
})
export class ParcoursModule{}