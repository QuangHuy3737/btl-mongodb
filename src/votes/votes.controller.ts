import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { VotesService } from './votes.service';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { Vote, VoteSchema } from 'src/schemas/vote.schema';
import mongoose from 'mongoose';

@Controller('votes')
export class VotesController {
  constructor(private readonly votesService: VotesService) {}

  @Post()
  async createVote(@Res() response, @Body() vote: Vote) {
    let newVote;
    newVote = await this.votesService.create(vote);
    return response.status(HttpStatus.CREATED).json({
      newVote,
      status: true,
    });
  }

  @Get()
  findAll() {
    return this.votesService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.votesService.findOne(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVoteDto: UpdateVoteDto) {
    return this.votesService.update(+id, updateVoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.votesService.remove(+id);
  }
}
