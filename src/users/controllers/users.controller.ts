import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUsersDto, UpdateUsersDto } from '../dtos/users.dto';

@Controller('users')
export class UsersController {
  constructor(private usersServices: UsersService) {}

  @Post()
  createUser(@Body() payload: CreateUsersDto) {
    return this.usersServices.create(payload);
  }

  @Get()
  getUsers() {
    return this.usersServices.findAll();
  }

  @Get(':id')
  getUsersById(@Param('id') id: string) {
    return this.usersServices.findById(id);
  }

  @Put(':id')
  updateUser(@Body() payload: UpdateUsersDto, @Param('id') id: string) {
    console.log(id);
    return this.usersServices.update(id, payload);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersServices.delete(id);
  }
}
