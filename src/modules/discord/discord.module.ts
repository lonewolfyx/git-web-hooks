import { Module } from '@nestjs/common'
import { DiscordService } from './discord.service'
import { DiscordController } from './discord.controller'
import { DiscordDispatcher } from './observer/discord.observer'

@Module({
    imports: [],
    controllers: [DiscordController],
    providers: [DiscordService, DiscordDispatcher]
})
export class DiscordModule {}
