import { Model } from 'mongoose';
import { User } from './user.schema';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    findByEmail(email: string): Promise<User | null>;
    createUser(email: string, password: string, name: string, role: string): Promise<User>;
    deleteUserById(userId: string): Promise<{
        deleted: boolean;
    }>;
    deleteUserByEmail(email: string): Promise<{
        deleted: boolean;
    }>;
    getAllUsers(): Promise<Pick<User, 'name' | 'email' | 'role'>[]>;
}
