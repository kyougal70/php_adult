import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src', 'image'),
      serveRoot: '/landers/mp_jp_adult/ABR/image',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src', 'css'),
      serveRoot: '/css',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src', 'js'),
      serveRoot: '/js',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src', 'images'),
      serveRoot: '/images',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src', 'css'),
      serveRoot: '/landers/mp_jp_adult/css',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src', 'js'),
      serveRoot: '/landers/mp_jp_adult/js',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src', 'images'),
      serveRoot: '/landers/mp_jp_adult/images',
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
