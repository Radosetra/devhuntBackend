import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Passion } from "./passion.entity";
import { PassionService } from "./passion.service";
import { PassionController } from "./passion.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Passion])],
    controllers: [PassionController],
    providers: [PassionService],
    exports: [PassionService]
})
export class PassionModule{}