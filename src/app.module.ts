import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import * as process from 'node:process'
import { ConfigModule } from '@nestjs/config'
import { CommonModule } from './module/common.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [`.env.${process.env.NODE_ENV}`]
        }),
        CommonModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
