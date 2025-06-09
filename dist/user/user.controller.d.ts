import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    deleteUserByEmail(email: string): Promise<{
        deleted: boolean;
    }>;
    getAllUsers(): Promise<Pick<import("./user.schema").User, "name" | "email" | "role">[]>;
}
