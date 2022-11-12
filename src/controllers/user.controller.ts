import { UserService } from './../services/user.service';
import { Controller, Delete, Get } from '@nestjs/common';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async getUser() {
    return await this.userService.getUser();
  }

  @Delete()
  public async deleteUser() {
    return await this.userService.deleteUser();
  }
}
