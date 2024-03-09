import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Novice } from "./novice.entity";
import { NoviceService } from "./novice.service";
import { NoviceController } from "./novice.controller";
import { PassionModule } from "src/passion/passion.module";
import { ParcoursModule } from "src/parcours/parcours.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([Novice]),
        PassionModule,
        ParcoursModule
    ],
    controllers: [NoviceController],
    providers: [NoviceService],
    exports: [NoviceService]
})
export class NoviceModule{}