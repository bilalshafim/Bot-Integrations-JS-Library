export abstract class IManager{
    constructor(public botData : String){}
    abstract establishConnection(botData: String) : void;
    abstract simpleTextExchange(text: String) : String;
}