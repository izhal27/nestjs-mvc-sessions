import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: any, done: (error: Error, user: any) => void) {
    done(null, user);
  }

  deserializeUser(payload: any, done: (error: Error, payload: string) => void) {
    done(null, payload);
  }
}
