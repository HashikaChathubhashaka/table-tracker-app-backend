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
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const item_schema_1 = require("./item.schema");
let ItemsService = class ItemsService {
    itemModel;
    constructor(itemModel) {
        this.itemModel = itemModel;
    }
    async create(createItemDto) {
        const newItem = new this.itemModel(createItemDto);
        return newItem.save();
    }
    async findAll() {
        return this.itemModel.find().exec();
    }
    async findOne(id) {
        return this.itemModel.findById(id).exec();
    }
    async update(id, updateItemDto) {
        return this.itemModel.findByIdAndUpdate(id, updateItemDto, { new: true }).exec();
    }
    async remove(id) {
        return this.itemModel.findByIdAndDelete(id).exec();
    }
    async removeByName(name) {
        return this.itemModel.deleteOne({ name });
    }
};
exports.ItemsService = ItemsService;
exports.ItemsService = ItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(item_schema_1.Item.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ItemsService);
//# sourceMappingURL=items.service.js.map