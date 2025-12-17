import { Body, Controller, Post } from '@nestjs/common'
import { DiscordService } from './discord.service'
import { PayloadDto } from './dto/payload.dto'
import { GithubType } from './decorator/github.type.decorator'

@Controller('discord')
export class DiscordController {
    constructor(private readonly discordService: DiscordService) {}

    @Post('payload')
    send(@GithubType() type: string, @Body() payloadDto: PayloadDto) {
        return this.discordService.send(type, payloadDto)
    }
}
