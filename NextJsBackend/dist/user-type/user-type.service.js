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
exports.UserTypeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let UserTypeService = class UserTypeService {
    constructor(userTypeModel) {
        this.userTypeModel = userTypeModel;
    }
    async create(createUserTypeDto) {
        console.log('Creating UserType:', createUserTypeDto);
        const createdUserType = new this.userTypeModel(createUserTypeDto);
        return await createdUserType.save();
    }
    async findAll() {
        return await this.userTypeModel.find().exec();
    }
    async findOne(id) {
        return await this.userTypeModel.findById(id).exec();
    }
    async update(id, updateUserTypeDto) {
        return await this.userTypeModel.findByIdAndUpdate(id, updateUserTypeDto, { new: true }).exec();
    }
    async delete(id) {
        return await this.userTypeModel.deleteOne({ _id: id }).exec();
    }
};
exports.UserTypeService = UserTypeService;
exports.UserTypeService = UserTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('UserType')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserTypeService);
//# sourceMappingURL=user-type.service.js.map