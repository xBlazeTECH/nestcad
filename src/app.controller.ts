import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
 
  @Get()
  @Render('index')
  index() {
    return {
      navlinks: [
        { label: "Home", url: "#", active: true },
        { label: "Link", url: "#" },
        { label: "Disabled", url: "#", disabled: true }
      ],
      brand: "NestCAD",
      title: "Sample Title",
      message: this.appService.getIndex()
    };
  }

  @Get('login')
  @Render('login')
  login() {
    return {
      title: "Sample Title"
    };
  }

  @Get('about')
  @Render('index')
  about() {
    return { title: "About", message: "test" };
  }
}
