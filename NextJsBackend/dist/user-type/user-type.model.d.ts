/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { Schema, Document, Types } from 'mongoose';
export interface UserType extends Document {
    user_type_id: Types.ObjectId;
    type_name: string;
}
export declare const UserTypeSchema: Schema<UserType, import("mongoose").Model<UserType, any, any, any, Document<unknown, any, UserType> & UserType & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserType, Document<unknown, {}, import("mongoose").FlatRecord<UserType>> & import("mongoose").FlatRecord<UserType> & Required<{
    _id: unknown;
}>>;
export declare const UserTypeModel: import("mongoose").Model<UserType, {}, {}, {}, Document<unknown, {}, UserType> & UserType & Required<{
    _id: unknown;
}>, any>;
