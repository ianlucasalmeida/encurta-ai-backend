import { Controller, Get, Post, Body, Param, UseGuards, Req } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request } from 'express';

@Controller('urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  // 🔒 Protegendo a criação de links, apenas usuários logados podem criar
  @UseGuards(JwtAuthGuard)
  @Post('shorten')
  async shortenUrl(@Body() body: { url: string }, @Req() req: Request) {
    const user = req.user;
    return this.urlsService.createShortUrl(body.url, user);
  }

  // 🔓 O redirecionamento não precisa ser protegido
  @Get(':shortUrl')
  async redirectUrl(@Param('shortUrl') shortUrl: string) {
    return this.urlsService.getOriginalUrl(shortUrl);
  }
}
