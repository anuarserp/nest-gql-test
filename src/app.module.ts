import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from "./user/user.module";

@Module({
   imports: [
      GraphQLModule.forRoot({
         autoSchemaFile: true,
      }),
      MongooseModule.forRoot("mongodb://127.0.0.1:27017/gql-test"),
      UserModule,
   ],
   controllers: [],
   providers: [],
})
export class AppModule {}
