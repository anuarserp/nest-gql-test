import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import * as argon2 from "argon2";
import { Model } from "mongoose";
import { CreateUserInput } from "src/inputs/create-user";
import { User } from "../models/user.model";

@Injectable()
export class UserService {
   constructor(@InjectModel(User.name) private userModel: Model<User>) {}

   async createUser(data: CreateUserInput): Promise<User> {
      const user = await this.userModel.create(data);
      user.password = await argon2.hash(data.password);

      return await user.save();
   }

   async getUsers(): Promise<User[]> {
      return await this.userModel.find();
   }
}
