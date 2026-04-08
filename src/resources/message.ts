import type { HttpClient } from "../client/HttpClient";
import type { SendTextConfig, SendTextResponse } from "../types/messages.types";

export class Message {
    private readonly basePath: string;

    constructor(
        private readonly http: HttpClient,
        private readonly instanceName: string | undefined
    ) {
        this.basePath = '/message';
    }

    public async sendText(obj: SendTextConfig) {
        if (!this.instanceName) {
            throw new Error('[sendText] É necessário informar o nome da instância durante a criação da classe para usar esse método.')
        }
        const path = this.basePath + '/sendText/' + this.instanceName;

        const body = {
            number: obj.phone,
            text: obj.text,
            ...(obj.delay !== undefined ? { delay: obj.delay } : {}),
            ...(obj.linkPreview !== undefined ? { linkPreview: obj.linkPreview } : {}),
            ...(obj.mentionsEveryOne !== undefined ? { mentionsEveryOne: obj.mentionsEveryOne } : {})
        }

        const response = await this.http.post<SendTextResponse>(path, body);

        console.log(response);
    }
}