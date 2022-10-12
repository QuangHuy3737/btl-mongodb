import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AuthLoginDto } from './auth-login.dto';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService:UsersService,
    private jwtService: JwtService  
  ){}
  async login(auth : AuthLoginDto){
    const user = await this.validatorUser(auth);
    if(user){
      const data = {
        username:user?.username
      }
      return {
        access_token: this.jwtService.sign(data),
        status:true,
        user
      }
    }
  }
 async validatorUser  (auth:AuthLoginDto)  {
  const { username,password} = auth;
  const user = await this.usersService.findByUsername(username);
  if(user){
    if(user.password!==password){
      throw new UnauthorizedException();
    }
    return user;
  }
  else {
    throw new UnauthorizedException();
  }
  
 }
 
  
}
