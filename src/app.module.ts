import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import * as process from 'node:process'
import { ConfigModule } from '@nestjs/config'
import { CommonModule } from './module/common.module'
import { DiscordModule } from './discord/discord.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: [`.env.${process.env.NODE_ENV}`]
        }),
        CommonModule,
        DiscordModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
