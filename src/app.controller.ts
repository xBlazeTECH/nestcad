import { Controller, Get, Render, Res, Req } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(@Req() req: Request, @Res() res: Response) {
    return res.render(
      this.appService.getViewName(req.query.q),
      {
        main: {
          title: "Page Title",
          lead: "Page Lead"
        },
        navlinks: [
          { label: "Home", url: "#", active: true },
          { label: "Link", url: "#" },
          { label: "Disabled", url: "#", disabled: true }
        ],
        scrollers: [
          { label: "Dashboard", url: "#", active: true },
          { label: "Friends", url: "#", badge: { show: true, value: "7", style: "badge-light" }},
          { label: "Explore", url: "#" },
          { label: "Suggestions", url: "#" },
          { label: "Link", url: "#" }
        ],
        brand: "NestCAD",
        title: "Sample Title",
        message: this.appService.getIndex()
      }
    );
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
