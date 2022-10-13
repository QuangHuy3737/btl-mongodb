import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Vote } from 'src/schemas/vote.schema';
import { User } from 'src/schemas/user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createVote(@Res() response, @Body() user: User) {
    let newUser;
    newUser = await this.usersService.create(user);
    return response.status(HttpStatus.CREATED).json({
      newUser,
    });
  }
}
