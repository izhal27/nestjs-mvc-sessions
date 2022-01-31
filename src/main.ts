import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';
import { engine } from 'express-handlebars';
import * as session from 'express-session';
import * as passport from 'passport';
import flash = require('connect-flash');
import * as hbs from 'handlebars';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const viewsPath = join(__dirname, '../public/views');
  app.engine('.hbs', engine({ extname: '.hbs', defaultLayout: 'main' }));
  app.set('views', viewsPath);
  app.set('view engine', '.hbs');
  hbs.registerPartial(__dirname, '../public/views/partials');

  app.use(
    session({ secret: 'nest-secret', resave: false, saveUninitialized: false }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());

  await app.listen(3000);
}
bootstrap();
