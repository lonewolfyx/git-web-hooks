import { Injectable } from '@nestjs/common'
import { PayloadDto } from './dto/payload.dto'
import { DiscordDispatcher } from './observer/discord.observer'
import { StarHandler } from './observer/star.handler'
import { ConfigService } from '@nestjs/config'
import { HttpClientService } from '../module/http-client.service'

@Injectable()
export class DiscordService {
    constructor(
        private readonly httpClientService: HttpClientService,
        private readonly dispatcher: DiscordDispatcher,
        private readonly configService: ConfigService
    ) {
        this.dispatcher.registry('star', new StarHandler())
    }

    async send(type: string, payload: PayloadDto) {
        if (type === 'ping') {
            return ''
        }
        await this.httpClientService.request({
            method: 'post',
            url: this.configService.get('DISCORD_HOOKS_URL'),
            data: this.dispatcher.dispatch({
                type,
                data: payload
            })
        })

        return ''
    }
}
