import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vote, VoteDocument } from 'src/schemas/vote.schema';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';

@Injectable()
export class VotesService {
  constructor(@InjectModel(Vote.name) private voteModel: Model<VoteDocument>) {}

  async create(vote: Vote): Promise<any> {
    const user = await this.voteModel.findOne({ idNumber: vote.idNumber });
    if (user) {
      console.log('User exists');
      return { message: 'Id number is voted.' };
    }

    return new this.voteModel(vote).save();
  }

  findAll() {
    return `This action returns all votes`;
  }

  findOne(nameCandidate: string) {
    return this.voteModel.find({ nameCandidate });
  }

  findOneByIdNumber(idNumber: string) {
    return this.voteModel.find({ idNumber });
  }

  update(id: number, updateVoteDto: UpdateVoteDto) {
    return `This action updates a #${id} vote`;
  }

  remove(id: number) {
    return `This action removes a #${id} vote`;
  }
}
