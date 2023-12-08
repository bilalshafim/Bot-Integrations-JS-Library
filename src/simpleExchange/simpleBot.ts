// user instantiates bot class with bot name and bot data
// bot name and data used to specifically construct client for specific bot
// user then sends text to bot.communicate() method and gets response 

import { IManager } from '../interfaces/IManager';
import { DialogFlowES } from '../handlers/vendors/DialogFlowES/DialogFlowESManager';

export class Bot{
    public manager : IManager;
    constructor(public bot: string, public botData: string){
        this.bot = bot;
        this.botData = botData;
        switch (this.bot) {
            case 'es':
                this.manager = new DialogFlowES(this.botData);
        }
    }
}