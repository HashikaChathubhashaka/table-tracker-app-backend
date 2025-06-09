"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableItemsController = void 0;
const common_1 = require("@nestjs/common");
const table_items_service_1 = require("./table-items.service");
const table_items_schema_1 = require("./table-items.schema");
let TableItemsController = class TableItemsController {
    tableItemsService;
    constructor(tableItemsService) {
        this.tableItemsService = tableItemsService;
    }
    async addItem(tableNumber, item) {
        return this.tableItemsService.addItem(tableNumber, item);
    }
    async updateItems(tableNumber, items) {
        return this.tableItemsService.updateItems(tableNumber, items);
    }
    async clearItems(tableNumber) {
        return this.tableItemsService.clearItems(tableNumber);
    }
    async getItemsByTableNumber(tableNumber) {
        return this.tableItemsService.getItemsByTableNumber(tableNumber);
    }
    async getTableOrderedBoolean(tableNumber) {
        return this.tableItemsService.getTableOrderedBoolean(tableNumber);
    }
};
exports.TableItemsController = TableItemsController;
__decorate([
    (0, common_1.Post)(':tableNumber'),
    __param(0, (0, common_1.Param)('tableNumber')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, table_items_schema_1.TableItem]),
    __metadata("design:returntype", Promise)
], TableItemsController.prototype, "addItem", null);
__decorate([
    (0, common_1.Put)(':tableNumber'),
    __param(0, (0, common_1.Param)('tableNumber')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Array]),
    __metadata("design:returntype", Promise)
], TableItemsController.prototype, "updateItems", null);
__decorate([
    (0, common_1.Delete)(':tableNumber'),
    __param(0, (0, common_1.Param)('tableNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TableItemsController.prototype, "clearItems", null);
__decorate([
    (0, common_1.Get)(':tableNumber'),
    __param(0, (0, common_1.Param)('tableNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TableItemsController.prototype, "getItemsByTableNumber", null);
__decorate([
    (0, common_1.Get)('/ordered/:tableNumber'),
    __param(0, (0, common_1.Param)('tableNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TableItemsController.prototype, "getTableOrderedBoolean", null);
exports.TableItemsController = TableItemsController = __decorate([
    (0, common_1.Controller)('table-items'),
    __metadata("design:paramtypes", [table_items_service_1.TableItemsService])
], TableItemsController);
//# sourceMappingURL=table-items.controller.js.map