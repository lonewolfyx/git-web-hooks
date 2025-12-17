import { HttpStatus, Injectable } from '@nestjs/common'
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { HttpException } from '@nestjs/common/exceptions/http.exception'

@Injectable()
export class HttpClientService {
    private readonly axiosInstance: AxiosInstance

    constructor() {
        this.axiosInstance = axios.create({
            timeout: 3000
        })

        this.axiosInstance.interceptors.response.use(
            (response: AxiosResponse) => response,
            (error: AxiosError) => {
                const status: number = error.response?.status ?? HttpStatus.INTERNAL_SERVER_ERROR
                const message: string | Record<string, any> = error.response?.data ?? error.message
                return Promise.reject(new HttpException(message, status))
            }
        )
    }

    /**
     * @param config
     */
    public async request<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        try {
            return await this.axiosInstance.request<T>(config)
        } catch (err) {
            throw err
        }
    }
}
