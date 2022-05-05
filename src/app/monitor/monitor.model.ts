interface MonitorJson {
    name: string;
}

export class Monitor {
    constructor(
        private _name: string
    ) {}

    get name(): string {
        return this._name;
    }

    static fromJSON(json: MonitorJson): Monitor {
        const monitor = new Monitor(json.name);
        return monitor;
    }

}