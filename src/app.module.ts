import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import { Vote, VoteSchema } from './schemas/vote.schema';
import { VotesModule } from './votes/votes.module';
import { UsersModule } from './users/users.module';
import { User, UserSchema } from './schemas/user.schema';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { Login } from './login/entities/login.entity';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    DataModule,
    VotesModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
    UsersModule,
    AuthModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService,UsersService],
})
export class AppModule {}
