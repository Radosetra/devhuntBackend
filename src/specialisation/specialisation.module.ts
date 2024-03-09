import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Specialisation } from "./specialisation.entity";
import { SpecialisationService } from "./specialisation.service";
import { SpecialisationController } from "./specialisation.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Specialisation])],
    controllers: [SpecialisationController],
    providers: [SpecialisationService],
    exports: [SpecialisationService]
})
export class SpecialisationModule{}