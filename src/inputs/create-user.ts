import {  Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";
import { LoginUserInput } from "./login-user";

@InputType()

export class CreateUserInput extends LoginUserInput{
  @Field()
  @IsString()
  @IsNotEmpty()
  username: string;

}
