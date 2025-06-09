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
exports.TableItemsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const table_items_schema_1 = require("./table-items.schema");
let TableItemsService = class TableItemsService {
    tableItemModel;
    constructor(tableItemModel) {
        this.tableItemModel = tableItemModel;
    }
    async addItem(tableNumber, item) {
        const newItem = new this.tableItemModel({ ...item, tableNumber });
        return newItem.save();
    }
    async updateItems(tableNumber, items) {
        await this.tableItemModel.deleteMany({ tableNumber });
        await this.tableItemModel.insertMany(items.map(item => ({ ...item, tableNumber })));
    }
    async clearItems(tableNumber) {
        await this.tableItemModel.deleteMany({ tableNumber });
    }
    async getItemsByTableNumber(tableNumber) {
        return this.tableItemModel.find({ tableNumber }).exec();
    }
    async getTableOrderedBoolean(tableNumber) {
        const items = await this.tableItemModel.find({ tableNumber }).exec();
        return items.length > 0;
    }
};
exports.TableItemsService = TableItemsService;
exports.TableItemsService = TableItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(table_items_schema_1.TableItem.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TableItemsService);
//# sourceMappingURL=table-items.service.js.map