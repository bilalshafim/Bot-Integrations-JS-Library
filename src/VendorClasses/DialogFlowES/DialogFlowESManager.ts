import { IManager } from '../../Interfaces/IManager';
import { SessionsClient } from '@google-cloud/dialogflow';

export class DialogFlowES {

    private _error : string;

    constructor(public botConfig: object){
        // super(botConfig);
        this.botConfig = botConfig;
        this.establishConnection(this.botConfig)
    }

    establishConnection(botConfig: object) : void {
        let sessionsClient = new SessionsClient();
        let esbotConfig = new ESBotConfig();

        try {
            esbotConfig = this.getESConfig(botConfig);
        } catch (error) {
            this._error = `Error in deserialzing ES config: ${error}`;
        }

    }

    simpleTextExchange(text: string) : string {
        const response = "asd";
        return response;
    }

    exchange(exchangeRequest: object) : object {
        return Object;
    }

    getESConfig(botConfig: object) : ESBotConfig {
        return new ESBotConfig();
    }

}