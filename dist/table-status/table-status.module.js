"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableStatusModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const table_status_service_1 = require("./table-status.service");
const table_status_gateway_1 = require("./table-status.gateway");
const table_status_controller_1 = require("./table-status.controller");
const table_status_schema_1 = require("./table-status.schema");
let TableStatusModule = class TableStatusModule {
};
exports.TableStatusModule = TableStatusModule;
exports.TableStatusModule = TableStatusModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: table_status_schema_1.TableStatus.name, schema: table_status_schema_1.TableStatusSchema }])],
        providers: [table_status_service_1.TableStatusService, table_status_gateway_1.TableStatusGateway],
        controllers: [table_status_controller_1.TableStatusController],
        exports: [table_status_service_1.TableStatusService],
    })
], TableStatusModule);
//# sourceMappingURL=table-status.module.js.map