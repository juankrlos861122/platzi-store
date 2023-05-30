import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsersFiltered(@Query('name') name: string, @Query('id') id: string) {
    if (name == null || id == null) {
      return 'ListUsers';
    }
    return { message: `Users ${name} with id: ${id}` };
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return { User: id };
  }

  @Post()
  create(@Body() payload: {}) {
    return { message: `Action Create`, payload: payload };
  }
}
