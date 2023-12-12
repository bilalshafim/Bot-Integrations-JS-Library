class ESSession {
    private _sessionId : string;

    public get sessionId() {
        return this._sessionId;
    }
    public set sessionId(value: string) {
        if (value !== null || value !== undefined) {
            this._sessionId = value;
        }
    }
}