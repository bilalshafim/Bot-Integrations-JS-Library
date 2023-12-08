import { Client, Manager } from '../../../interfaces/IManager';

export class DialogFlowES extends IManager{
    constructor(public botData: String){
        super(botData);
        this.botData = botData;
        this.establishConnection(this.botData)
    }

    establishConnection(botData: String): void {
        
    }

    simpleTextExchange(text: String): String {
        const response = "asd";
        return response;
    }
}