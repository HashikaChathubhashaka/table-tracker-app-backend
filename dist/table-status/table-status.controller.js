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
exports.TableStatusController = void 0;
const common_1 = require("@nestjs/common");
const table_status_service_1 = require("./table-status.service");
const table_status_schema_1 = require("./table-status.schema");
let TableStatusController = class TableStatusController {
    tableStatusService;
    constructor(tableStatusService) {
        this.tableStatusService = tableStatusService;
    }
    async getAllTableStatuses() {
        return this.tableStatusService.getAllTableStatuses();
    }
    async getTableStatusByTableName(tableName) {
        return this.tableStatusService.getTableStatusByTableName(tableName);
    }
    async createTableStatus(tableStatus) {
        return this.tableStatusService.createTableStatus(tableStatus);
    }
    async updateTableStatusByTableName(tableName, tableStatus) {
        return this.tableStatusService.updateTableStatusByTableName(tableName, tableStatus);
    }
    async deleteTableStatusByTableName(tableName) {
        return this.tableStatusService.deleteTableStatusByTableName(tableName);
    }
};
exports.TableStatusController = TableStatusController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TableStatusController.prototype, "getAllTableStatuses", null);
__decorate([
    (0, common_1.Get)(':tableName'),
    __param(0, (0, common_1.Param)('tableName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TableStatusController.prototype, "getTableStatusByTableName", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [table_status_schema_1.TableStatus]),
    __metadata("design:returntype", Promise)
], TableStatusController.prototype, "createTableStatus", null);
__decorate([
    (0, common_1.Put)(':tableName'),
    __param(0, (0, common_1.Param)('tableName')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TableStatusController.prototype, "updateTableStatusByTableName", null);
__decorate([
    (0, common_1.Delete)(':tableName'),
    __param(0, (0, common_1.Param)('tableName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TableStatusController.prototype, "deleteTableStatusByTableName", null);
exports.TableStatusController = TableStatusController = __decorate([
    (0, common_1.Controller)('table-status'),
    __metadata("design:paramtypes", [table_status_service_1.TableStatusService])
], TableStatusController);
//# sourceMappingURL=table-status.controller.js.map