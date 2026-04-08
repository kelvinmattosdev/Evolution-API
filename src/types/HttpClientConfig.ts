export type HttpClientConfig = {
    urlBase: string;
    apiKey: string;
    instanceName?: string; /** SE NÃO INFORMADO, FUNCIONALIDADES QUE UTILIZAM O NOME DA INSTÂNCIA PERMANECEM INDISPONÍVEIS. */
}