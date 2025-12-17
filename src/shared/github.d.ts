import { PayloadDto } from '../modules/discord/dto/payload.dto'

export type IGithubType = 'ping' | 'watch' | 'star' | 'status' | 'push' | 'deployment' | 'deployment_status'

export type IGithubAction = 'created' | 'started' | 'deleted'

export type IGithubPayload = PayloadDto
