import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Parcours } from "./parcours.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Parcours])],
    controllers: [],
    providers: [],
    exports: []
})
export class ParcoursModule{}