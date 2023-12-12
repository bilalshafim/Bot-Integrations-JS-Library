class simpleExchangeRequest {
    private _userInput : string;
    private _userId : string;
    private _botConfig : object;
    private _session : object;
    private _customPayload : object;

    public get userInput() {
        return this._userInput;
    }
    public set userInput(value: string) {
        if (value !== null || value !== undefined) {
            this._userInput = value;
        }
    }

    // 'userId' is created in library if not present on first request(at the time of establising client). 
    // If user wants to assign 'userId' (e.g. cookie data of specific user on web), 'userId' can be sent on first request, library will not generate 'userId' but use the one provided by user.
    // 'userId' is for coordinating requests and responses of multiple users by the user on their own code.
    public get userId() {
        return this._userId;
    }
    public set userId(value: string) {
        if (value !== null || value !== undefined) {
            this._userId = value;
        }
    }

    public get botConfig() {
        return this._botConfig;
    }
    public set botConfig(value: object) {
        if (value !== null || value !== undefined) {
            this._botConfig = value;
        }
    }

 
    // The bot generates a session and requires it to be sent on next request, the field 'session' will be used.  
    public get session() {
        return this._session;
    }
    public set session(value: object) {
        this._session = value;
    }

    public get customPayload() {
        return this._customPayload;
    }
    public set customPayload(value: object) {
        this._customPayload = value;
    }

}