import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private usersModel: Model<UserDocument>) {}

  async create(user: User):Promise<any>  {
    const userOld = await this.usersModel.findOne({ username: user.username });
    const address = await this.usersModel.findOne({ walletAddress: user.walletAddress });

    if (userOld) {
      console.log('User exists');
      // throw new Error("User exists")
      return "User exists";

    }

    else if (address)  {
      return "Wallet Address exists";
      
    }
    else{
        return new this.usersModel(user).save();
    }
  
  }

  findAll() {
    return this.usersModel.find();
  }

  async findByUsername(username: string) {
    return await this.usersModel.findOne({ username: username });
  }
  async findByWalletAddress(walletAddress: string) {
    return await this.usersModel.findOne({ walletAddress: walletAddress });
  }
 
}
