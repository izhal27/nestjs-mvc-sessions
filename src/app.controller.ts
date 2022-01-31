import {
  Controller,
  Get,
  Post,
  Render,
  Res,
  UseGuards,
  Request,
  UseFilters,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';

import { AppService } from './app.service';
import { AuthExceptionFilter } from './common/filters/auth-exceptions.filter';
import { AuthenticatedGuard } from './common/guards/authenticated.guard';
import { LoginGuard } from './common/guards/login.guards';

@Controller()
@UseFilters(AuthExceptionFilter)
export class AppController {
  constructor(private readonly appService: AppService) {}
  private logger: Logger = new Logger('AppController');

  @UseGuards(AuthenticatedGuard)
  @Get('/')
  @Render('index')
  getIndex(@Request() req) {
    this.logger.log(req.user);
    return { user: req.user };
  }

  @Get('/login')
  @Render('login')
  index(@Request() req) {
    return { message: req.flash('loginError') };
  }

  @UseGuards(LoginGuard)
  @Post('/login')
  login(@Res() res: Response) {
    res.redirect('/');
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/home')
  @Render('home')
  getHome(@Request() req) {
    return { user: req.user };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/profile')
  @Render('profile')
  getProfile(@Request() req) {
    return { user: req.user };
  }

  @Get('/logout')
  logout(@Request() req, @Res() res: Response) {
    req.logout();
    res.redirect('/');
  }
}
