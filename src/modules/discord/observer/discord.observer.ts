import { IHandleMessage, MessageHandler } from '../types/type'
import { Injectable } from '@nestjs/common'

@Injectable()
export class DiscordDispatcher {
    private handlers: Map<string, MessageHandler[]> = new Map()

    /**
     * registry message handler
     * @param type
     * @param handler
     */
    registry(type: string, handler: MessageHandler) {
        if (!this.handlers.has(type)) {
            this.handlers.set(type, [])
        }
        this.handlers.get(type)!.push(handler)
    }

    /**
     * dispatch message
     * @param message
     */
    dispatch(message: IHandleMessage) {
        const { type, data } = message
        const handlers = this.handlers.get(type) || []
        if (!handlers.length) {
            return null
        }

        const results = handlers.map((handler) => handler.handle(data))

        return results.filter(Boolean).at(0)
    }
}
