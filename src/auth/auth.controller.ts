// src/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto } from './create-register.dto';
import { LoginDto } from './create-login.dto';

@ApiTags('auth') // Group in Swagger
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: RegisterDto) {
    return this.authService.register(body.username, body.password);
  }

  @Post('login')
  async login(@Body() body: LoginDto) {
    return this.authService.login(body.username, body.password);
  }
}
