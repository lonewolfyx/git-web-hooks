import { IPayload, MessageHandler } from '../types/type'

export class StarHandler implements MessageHandler {
    handle(data: IPayload) {
        if (data.action !== 'created') {
            return {}
        }

        return {
            username: `${data.repository?.full_name}[bot]`,
            avatar_url: data.sender?.avatar_url,
            embeds: [
                {
                    title: `🎉 [${data.repository?.full_name}] has new started user`,
                    description: `✨ **Welcome!** ✨

👋 Hi there, **[@${data.sender?.login}](${data.sender?.html_url})**

Thank you for following — we’re thrilled to have you with us.
🌟 Stay tuned for updates, insights, and more!

 `,
                    color: 15258703,
                    url: data.repository?.html_url,
                    author: {
                        name: `@${data.sender?.login}`,
                        url: data.sender?.html_url,
                        icon_url: data.sender?.avatar_url
                    },
                    footer: {
                        text: data.organization?.login,
                        icon_url: data.organization?.avatar_url
                    }
                }
            ]
        }
    }
}
