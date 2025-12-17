import { IGithubPayload } from '../../../shared/github'

export interface MessageHandler {
    handle(data: IGithubPayload): object
}

export interface IHandleMessage {
    type: string
    data: IGithubPayload
}
