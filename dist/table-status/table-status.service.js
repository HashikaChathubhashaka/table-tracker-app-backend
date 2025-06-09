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
exports.TableStatusService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const table_status_schema_1 = require("./table-status.schema");
const table_status_gateway_1 = require("./table-status.gateway");
let TableStatusService = class TableStatusService {
    tableStatusModel;
    tableStatusGateway;
    constructor(tableStatusModel, tableStatusGateway) {
        this.tableStatusModel = tableStatusModel;
        this.tableStatusGateway = tableStatusGateway;
    }
    async getAllTableStatuses() {
        return this.tableStatusModel.find().exec();
    }
    async getTableStatusByTableName(tableName) {
        return this.tableStatusModel.findOne({ tableName }).exec();
    }
    async createTableStatus(tableStatus) {
        const newTableStatus = new this.tableStatusModel(tableStatus);
        return newTableStatus.save();
    }
    async updateTableStatusByTableName(tableName, tableStatus) {
        const updatedTableStatus = await this.tableStatusModel.findOneAndUpdate({ tableName }, tableStatus, { new: true }).exec();
        if (updatedTableStatus) {
            this.tableStatusGateway.sendTableStatusUpdate(updatedTableStatus);
        }
        return updatedTableStatus;
    }
    async deleteTableStatusByTableName(tableName) {
        const deletedTableStatus = await this.tableStatusModel.findOneAndDelete({ tableName }).exec();
        if (deletedTableStatus) {
            this.tableStatusGateway.sendTableStatusUpdate({ tableName, deleted: true });
        }
        return deletedTableStatus;
    }
};
exports.TableStatusService = TableStatusService;
exports.TableStatusService = TableStatusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(table_status_schema_1.TableStatus.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        table_status_gateway_1.TableStatusGateway])
], TableStatusService);
//# sourceMappingURL=table-status.service.js.map