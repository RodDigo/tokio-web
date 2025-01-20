
export class Transferencia {
    id: number;
    valor: number;
    dtAgendamento: Date;
    dtTransferencia: Date;
    taxa: number;
    taxaFixa: number;
    total: number;
    idContaOrigem: number;
    idContaDestino: number;
}