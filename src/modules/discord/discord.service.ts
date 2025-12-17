import { Injectable } from '@nestjs/common'
import { PayloadDto } from './dto/payload.dto'
import { DiscordDispatcher } from './observer/discord.observer'
import { StarHandler } from './observer/star.handler'
import { ConfigService } from '@nestjs/config'
import { HttpClientService } from '../../common/module/http-client.service'
import { isObject } from '@nestjs/common/utils/shared.utils'

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

        const content = this.dispatcher.dispatch({
            type,
            data: payload
        })

        if (!Object.keys(isObject(content)).length || !content) {
            return ''
        }

        await this.httpClientService.request({
            method: 'post',
            url: this.configService.get('DISCORD_HOOKS_URL'),
            data: content
        })

        return ''
    }
}
