/*
 * @Date: 2023-05-22 13:09:16
 * @LastEditors: wkl
 * @LastEditTime: 2023-05-22 13:33:42
 * @FilePath: /code/app-serve/app-serv/src/app.module.ts
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
