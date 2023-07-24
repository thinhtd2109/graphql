import { Request, Response } from 'express';
import { Inject, Service } from "typedi";
import { UserService } from './user.service';

@Service()
export class UserController {
  constructor(@Inject(() => UserService) private userService: UserService) {
    this.userService = userService;
  }
  async signin(req: Request, res: Response) {
    return await this.userService.signin();
  }
}