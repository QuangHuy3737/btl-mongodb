import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import { Vote, VoteSchema } from './schemas/vote.schema';
import { VotesModule } from './votes/votes.module';

@Module({
  imports: [
    DataModule,
    VotesModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    MongooseModule.forFeature([{name: Vote.name, schema: VoteSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
