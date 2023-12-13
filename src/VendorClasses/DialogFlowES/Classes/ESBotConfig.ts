export class ESBotConfig {
    private _jsonServiceAccount : object;
    private _gcpProject : string;
    private _region : string;
    private _environment : string;

    public get jsonServiceAccount() {
        return this._jsonServiceAccount;
    }
    public set jsonServiceAccount(value: object) {
        if (value !== null || value !== undefined) {
            this._jsonServiceAccount = value;
        }
    }

    public get gcpProject() {
        return this._gcpProject;
    }
    public set gcpProject(value: string) {
        if (value !== null || value !== undefined) {
            this._gcpProject = value;
        }
    }

    public get region() {
        return this._region;
    }
    public set region(value: string) {
        if (value !== null || value !== undefined) {
            this._region = value;
        }
    }

    public get environment() {
        return this._environment;
    }
    public set environment(value: string) {
        if (value !== null || value !== undefined) {
            this._environment = value;
        }
    }
}