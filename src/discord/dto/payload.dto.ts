export class PayloadDto {
    action: string
    starred_at: string
    repository?: {
        name: string
        full_name: string
        html_url: string
        fork: boolean
    }
    organization?: {
        login: string
        avatar_url: string
        description: string
    }
    sender?: {
        login: string
        avatar_url: string
        html_url: string
    }
}
