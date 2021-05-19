import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User } from "../models/user.model";
import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";
import { UserSchema } from "../models/user.model";

@Module({
   imports: [
      MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
   ],
   providers: [UserResolver, UserService],
})
export class UserModule {}
