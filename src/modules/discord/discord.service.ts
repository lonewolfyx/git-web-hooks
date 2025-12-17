import { Injectable } from '@nestjs/common'
import { DiscordDispatcher } from './observer/discord.observer'
import { GithubStarHandler } from './observer/github.star.handler'
import { ConfigService } from '@nestjs/config'
import { HttpClientService } from '../../common/module/http-client.service'
import { isObject } from '@nestjs/common/utils/shared.utils'
import { IGithubPayload, IGithubType } from '../../shared/github'

@Injectable()
export class DiscordService {
    constructor(
        private readonly httpClientService: HttpClientService,
        private readonly dispatcher: DiscordDispatcher,
        private readonly configService: ConfigService
    ) {
        this.dispatcher.registry('star', new GithubStarHandler())
    }

    async send(type: IGithubType, payload: IGithubPayload) {
        if (type === 'ping') {
            return ''
        }

        const content = this.dispatcher.dispatch({
            type,
            data: payload
        })

        if (isObject(content) ? !Object.keys(content).length : false) {
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
