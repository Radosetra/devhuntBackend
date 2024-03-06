import { Module } from "@nestjs/common";
import { DataFactoryService } from "./data-factory.service";



@Module({
    providers: [DataFactoryService],
    exports: [DataFactoryService],
})

export class DataFactoryModule {}