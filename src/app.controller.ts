import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  index() {
    return { title: "Test Title", message: this.appService.getIndex() };
  }

  @Get()
  @Render('index')
  about() {
    return { message: "test" };
  }
}
