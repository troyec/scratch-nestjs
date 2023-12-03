import { Controller } from "@nestjs/common";
import { Get } from "@nestjs/common";

@Controller('index')
export class AppController {
  @Get('/home')
  getRootRoute() {
    return "Hello Nestjs!";
  }
  @Get('/bye')
  getByeRoute() {
    return "Bye Nestjs!";
  }
}