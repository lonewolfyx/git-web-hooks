import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { version } from '../package.json'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.enableCors()

    const config = new DocumentBuilder().setTitle('Github Web Hooks').setDescription('').setVersion(version).build()
    const documentFactory = () => SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, documentFactory, {
        jsonDocumentUrl: 'api/json',
        swaggerOptions: {
            showExtensions: true
        }
    })

    await app.listen(process.env.PORT ?? 3000)

    return app.getUrl()
}

void (async (): Promise<void> => {
    try {
        const url = await bootstrap()
        Logger.log(url, 'Bootstrap')
    } catch (error) {
        Logger.error(error, 'Bootstrap')
    }
})()
