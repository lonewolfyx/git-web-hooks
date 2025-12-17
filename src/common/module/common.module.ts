import { Global, Module } from '@nestjs/common'
import { HttpClientService } from './http-client.service'

@Global()
@Module({
    providers: [HttpClientService],
    exports: [HttpClientService]
})
export class CommonModule {}
