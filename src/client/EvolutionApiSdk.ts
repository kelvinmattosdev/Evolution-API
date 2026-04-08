import { Message } from "../resources/message";
import type { HttpClientConfig } from "../types/HttpClientConfig";
import { HttpClient } from "./HttpClient";

export class EvolutionApiSdk {
    private readonly http: HttpClient;

    //? Métodos disponíveis para API
    public readonly message: Message;

    constructor(config: HttpClientConfig) {
        this.http = new HttpClient(config);

        //? Add Métodos
        this.message = new Message(this.http, config.instanceName);
    }
}