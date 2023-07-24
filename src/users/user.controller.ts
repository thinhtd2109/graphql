
import { Request, Response } from 'express';
import Container, { Inject, Service } from "typedi";
import { UserService } from './user.service';

@Service()
export class InventoryController {
  constructor(@Inject(() => UserService) private userService: UserService,) {
    this.userService = userService;
  }
  async signin(req: Request, res: Response) {
    return await this.userService.signin();
  }
}