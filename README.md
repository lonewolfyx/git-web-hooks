<p align="center">
    <img src="public/logo.svg" width="120" alt="git web hooks" />
</p>

# Git Web Hooks

A lightweight Git Web Hook wrapper for receiving GitHub webhook payloads and sending them to various supported
platforms.

## Features

- 🎯 **GitHub Webhook Receiver**: Easily receive and process various types of GitHub webhook events
- 🌐 **Multi-Platform Support**: Support sending to multiple messaging platforms with modular design for easy extension
- 🔧 **Modular Design**: Built with observer pattern for easy maintenance and extension
- ⚡ **High Performance**: Built on NestJS framework, providing stable and reliable API service
- 📝 **TypeScript**: Fully written in TypeScript with excellent type support

## Supported GitHub Events

- `ping` - GitHub ping event
- `watch` - Repository watch/unwatch
- `star` - Repository star/unstar
- `status` - Status updates
- `push` - Code push
- `deployment` - Deployment events
- `deployment_status` - Deployment status updates

## Quick Start

### Requirements

- Node.js >= 16
- pnpm (recommended) or npm

### Install Dependencies

```bash
pnpm install
```

### Environment Configuration

Create `.env.development` file and configure Discord Webhook URL:

```env
DISCORD_HOOKS_URL=https://discord.com/api/webhooks/your-webhook-id/your-token
```

### Start Service

```bash
# Development mode
pnpm run start:dev

# Production mode
pnpm run build
pnpm run start:prod
```

## API Documentation

For detailed API documentation, please visit: [API Documentation](https://git-web-hooks.vercel.app/docs)

## Supported Platforms

### ✅ Discord

- 📝 Automatically converts GitHub events to beautiful Discord messages
- 🔗 Support for embeds, custom formats, and more

Want to support more platforms? Feel free to submit an Issue or Pull Request!

---

💡 **Note**: This project focuses on bridging GitHub webhooks to various platforms. Currently supports Discord with more
platforms under development. Welcome to submit Issues or Pull Requests to support more platforms!
