import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UserServiceService } from './user-service.service';
import { User } from './user-entity';

@Controller()
export class UserServiceController {
  constructor(private readonly userServiceService: UserServiceService) {}

  @Post()
  createUser(@Body() userDto: Partial<User>) {
    return this.userServiceService.createUser(userDto);
  }

  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.userServiceService.findUserById(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() userDto: Partial<User>) {
    return this.userServiceService.updateUser(id, userDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userServiceService.deleteUser(id);
  }
}
