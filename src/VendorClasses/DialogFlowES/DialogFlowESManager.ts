// import { IManager } from '../../Interfaces/IManager';
import { SessionsClient } from '@google-cloud/dialogflow';
import { ESBotConfig } from '../DialogFlowES/Classes/ESBotConfig';
import { ESSession } from './Classes/ESSession';
import { ExchangeRequest } from '../../models/ExchangeRequest';
import { ExchangeResponse } from '../../models/ExchangeResponse';

export class DialogFlowES {

    private _error : string;

    constructor(){
    }

    communicatewWithES(exchangeRequest: ExchangeRequest) : ExchangeResponse {
        let sessionsClient = new SessionsClient();
        let esbotConfig = new ESBotConfig();
        let botSession = new ESSession();

        try {
            esbotConfig = this.getESConfig(exchangeRequest.botConfig);
        } catch (error) {
            this._error = `Error in deserialzing ES config: ${error}`;
        }

        // Deserialize Session obj. Contains sessionId for consequent exchanges

        // if (typeof exchangeRequest.session && exchangeRequest.session.toString()) {
        if (exchangeRequest.session != null && exchangeRequest.session.toString() != "") {
            
        }
        else {
            // Generate new session Id. This will be added to the main sessionId which will be sent back to the user for subsequent exchanges with DialogFlowES

        }

        // Create ES client


        // Set and send request


        // Set response data
        
        return new ExchangeResponse();
    }

    getESConfig(botConfig: object) : ESBotConfig {
        return new ESBotConfig();
    }

}