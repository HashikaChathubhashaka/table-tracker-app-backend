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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableStatusSchema = exports.TableStatus = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let TableStatus = class TableStatus {
    tableName;
    ordered;
    preparing;
    prepared;
    served;
    billed;
    orderedBy;
    preparingBy;
    preparedBy;
    servedBy;
    billedBy;
};
exports.TableStatus = TableStatus;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], TableStatus.prototype, "tableName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], TableStatus.prototype, "ordered", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], TableStatus.prototype, "preparing", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], TableStatus.prototype, "prepared", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], TableStatus.prototype, "served", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], TableStatus.prototype, "billed", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], TableStatus.prototype, "orderedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], TableStatus.prototype, "preparingBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], TableStatus.prototype, "preparedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], TableStatus.prototype, "servedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], TableStatus.prototype, "billedBy", void 0);
exports.TableStatus = TableStatus = __decorate([
    (0, mongoose_1.Schema)({ collection: 'tableStatus' })
], TableStatus);
exports.TableStatusSchema = mongoose_1.SchemaFactory.createForClass(TableStatus);
//# sourceMappingURL=table-status.schema.js.map