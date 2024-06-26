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
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const user_module_1 = require("./user/user.module");
const user_type_module_1 = require("./user-type/user-type.module");
const dotenv = require("dotenv");
const feedback_module_1 = require("./feedback/feedback.module");
const customer_module_1 = require("./customer/customer.module");
const order_module_1 = require("./order/order.module");
const menu_module_1 = require("./menu/menu.module");
const menu_type_module_1 = require("./menu-type/menu-type.module");
dotenv.config();
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URL),
            user_module_1.UserModule,
            user_type_module_1.UserTypeModule,
            customer_module_1.CustomerModule,
            feedback_module_1.FeedbackModule,
            order_module_1.OrderModule,
            menu_module_1.MenuModule,
            menu_type_module_1.MenuTypeModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map