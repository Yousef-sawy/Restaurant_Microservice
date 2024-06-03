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
exports.UserTypeController = void 0;
const common_1 = require("@nestjs/common");
const user_type_service_1 = require("./user-type.service");
let UserTypeController = class UserTypeController {
    constructor(userTypeService) {
        this.userTypeService = userTypeService;
    }
    async create(createUserTypeDto) {
        console.log('Received DTO:', createUserTypeDto);
        return this.userTypeService.create(createUserTypeDto);
    }
    async findAll() {
        return this.userTypeService.findAll();
    }
    async findOne(id) {
        return this.userTypeService.findOne(id);
    }
    async update(id, updateUserTypeDto) {
        return this.userTypeService.update(id, updateUserTypeDto);
    }
    async remove(id) {
        return this.userTypeService.delete(id);
    }
};
exports.UserTypeController = UserTypeController;
__decorate([
    (0, common_1.Post)('createUserType'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserTypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('updateUserType/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('deleteUserType/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserTypeController.prototype, "remove", null);
exports.UserTypeController = UserTypeController = __decorate([
    (0, common_1.Controller)('userTypes'),
    __metadata("design:paramtypes", [user_type_service_1.UserTypeService])
], UserTypeController);
//# sourceMappingURL=user-type.controller.js.map