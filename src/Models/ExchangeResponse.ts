export class ExchangeResponse {
    private _messages : string[];
    private _userId : string;
    private _customPayload : object;
    private _session : object;
    private _error : string;
    private _endConversation : boolean;
    
    public get messages() {
        return this._messages;
    }
    public set messages(value: string[]) {
        if (value !== null || value !== undefined) {
            this._messages = value;
        }
    }

    public get userId() {
        return this._userId;
    }
    public set userId(value: string) {
        if (value !== null || value !== undefined) {
            this._userId = value;
        }
    }

    public get customPayload() {
        return this._customPayload;
    }
    public set customPayload(value: object) {
        if (value !== null || value !== undefined) {
            this._customPayload = value;
        }
    }

    public get session() {
        return this._session;
    }
    public set session(value: object) {
        if (value !== null || value !== undefined) {
            this._session = value;
        }
    }

    public get error() {
        return this._error;
    }
    public set error(value: string) {
        if (value !== null || value !== undefined) {
            this._error = value;
        }
    }

    public get endConversation() {
        return this._endConversation;
    }
    public set endConversation(value: boolean) {
        if (value !== null || value !== undefined) {
            this._endConversation = value;
        }
    }
}