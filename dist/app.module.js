"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const items_module_1 = require("./items/items.module");
const table_status_module_1 = require("./table-status/table-status.module");
const table_items_module_1 = require("./table-items/table-items.module");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./authentication/auth.module");
const settings_module_1 = require("./settings/settings.module");
const dotenv = require("dotenv");
dotenv.config();
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI || "mongodb://localhost:27017/tablemanagmentapp"),
            items_module_1.ItemsModule,
            table_status_module_1.TableStatusModule,
            table_items_module_1.TableItemsModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            settings_module_1.SettingsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map