export abstract class IManager{
    constructor(public botConfig : string){}
    abstract establishConnection(botConfig: string) : void;
    abstract simpleTextExchange(text: String) : string;
    abstract exchange(exchangeRequest: object) : object;
    abstract getBotConfig(botConfig: object) : object;
}