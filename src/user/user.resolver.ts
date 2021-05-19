import { Args, Mutation,Query,Resolver } from "@nestjs/graphql";
import { CreateUserInput } from "../inputs/create-user";
import { User } from "../models/user.model";
import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver {
   constructor(private readonly userService: UserService) {}

   @Query(() => [User])
   async getUsers(): Promise<User[]> {
      return await this.userService.getUsers();
   }

   @Mutation(() => User )
   async createUser(
      @Args("createUserData") createUserData: CreateUserInput 
   ): Promise<User> {
      return await this.userService.createUser(createUserData);
   }
}
