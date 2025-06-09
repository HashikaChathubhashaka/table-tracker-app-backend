"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableItemsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const table_items_service_1 = require("./table-items.service");
const table_items_controller_1 = require("./table-items.controller");
const table_items_schema_1 = require("./table-items.schema");
let TableItemsModule = class TableItemsModule {
};
exports.TableItemsModule = TableItemsModule;
exports.TableItemsModule = TableItemsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: table_items_schema_1.TableItem.name, schema: table_items_schema_1.TableItemSchema }]),
        ],
        providers: [table_items_service_1.TableItemsService],
        controllers: [table_items_controller_1.TableItemsController],
    })
], TableItemsModule);
//# sourceMappingURL=table-items.module.js.map