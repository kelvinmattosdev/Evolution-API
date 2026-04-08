import type { HttpClientConfig } from "../types/HttpClientConfig";

export class HttpClient {
    //? Propriedades da Classe EvolutionApiSdk
    private readonly urlBase: string;
    private readonly apiKey: string;

    constructor(config: HttpClientConfig) {
        this.urlBase = config.urlBase;
        this.apiKey = config.apiKey;
    }

    public async get<T>(path: string): Promise<T> {
        const url = this.urlBase + path;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                apikey: this.apiKey
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        
        return response.json() as Promise<T>
    }
    
    public async post<T>(path: string, body: Record<string, any>): Promise<T> {
        const url = this.urlBase + path;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                apikey: this.apiKey
            },
            body: JSON.stringify(body)
        });

        console.log(url);
        
        if(!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json() as Promise<T>;
    }
}