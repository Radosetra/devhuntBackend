import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Novice } from "./novice.entity";
import { NoviceService } from "./novice.service";
import { NoviceController } from "./novice.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Novice])],
    controllers: [NoviceController],
    providers: [NoviceService],
    exports: [NoviceService]
})
export class NoviceModule{}