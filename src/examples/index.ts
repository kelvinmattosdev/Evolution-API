import { EvolutionApiSdk } from "../client/EvolutionApiSdk";

const client = new EvolutionApiSdk({
    urlBase: "https://api.seu-dominio.com",
    instanceName: "NomeDaSuaInstancia", //! Opcional (PARA CRIAR INSTÂNCIA NÃO DEVE LIBERAR PARA ENVIO DE MENSAGENS E COISAS QUE SUAM O NOME DA INSTÂNCIA)
    apiKey: "znnzd4kdenwbzn3cphzbmogq6c6krcrk"
});

client.message.sendText({
    phone: '5514999999999',
    text: 'Hello World!'
});