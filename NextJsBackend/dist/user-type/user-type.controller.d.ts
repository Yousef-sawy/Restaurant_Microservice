import { UserTypeService } from './user-type.service';
import { UserType } from './user-type.model';
export declare class UserTypeController {
    private readonly userTypeService;
    constructor(userTypeService: UserTypeService);
    create(createUserTypeDto: UserType): Promise<UserType>;
    findAll(): Promise<UserType[]>;
    findOne(id: string): Promise<UserType>;
    update(id: string, updateUserTypeDto: UserType): Promise<UserType>;
    remove(id: string): Promise<any>;
}
