"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        auto: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    user_type: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'UserType',
        required: true,
    },
    national_id: {
        type: String,
        required: true,
    },
    phone_no: {
        type: String,
        required: true,
    },
});
exports.UserModel = (0, mongoose_1.model)('User', exports.UserSchema);
//# sourceMappingURL=user.model.js.map