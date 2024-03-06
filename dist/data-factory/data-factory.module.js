"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataFactoryModule = void 0;
const common_1 = require("@nestjs/common");
const data_factory_service_1 = require("./data-factory.service");
let DataFactoryModule = class DataFactoryModule {
};
exports.DataFactoryModule = DataFactoryModule;
exports.DataFactoryModule = DataFactoryModule = __decorate([
    (0, common_1.Module)({
        providers: [data_factory_service_1.DataFactoryService],
        exports: [data_factory_service_1.DataFactoryService],
    })
], DataFactoryModule);
//# sourceMappingURL=data-factory.module.js.map