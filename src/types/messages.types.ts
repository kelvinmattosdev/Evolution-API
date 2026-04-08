export type SendTextConfig = {
    phone: string; /** Número que vai receber a mensagem*/
    text: string; /** Mensagem em texto que será enviada */
    delay?: number; /** Tempo em milissegundos para o "Digitando..." do WhatsApp */
    linkPreview?: boolean; /** Exibe uma pré-visualização do site de destino se houver um link na mensagem. */
    mentionsEveryOne?: boolean; /** Mencione todos quando enviar a mensagem */
}

export type SendTextResponse = {

}