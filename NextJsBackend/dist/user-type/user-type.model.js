"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTypeModel = exports.UserTypeSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserTypeSchema = new mongoose_1.Schema({
    user_type_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        default: () => new mongoose_1.Types.ObjectId(),
    },
    type_name: {
        type: String,
        required: true,
    },
});
exports.UserTypeModel = (0, mongoose_1.model)('UserType', exports.UserTypeSchema);
//# sourceMappingURL=user-type.model.js.map