import { Injectable } from "@angular/core";

export type BrowserLogger = (msg: any, obj?: Object) => void;

@Injectable()
export class BrowserLoggerService {
    constructor() {

    }

    createLog(name: string = 'default', color: string = null): BrowserLogger {
        let n = 0;
        return (msg, obj = {}): void => {
            n++;
            const err: string = `${name} log: ${new Date().toISOString()}-LOG-#${n} => ${msg}`;
            const log: string = ` %c${name} log:${new Date().toISOString()}-LOG-#${n} => ${msg}`;
            const colorStyle: string = `${color ? 'color:' + color : ''}`;

            if (msg instanceof Error) {
                console.error(err, obj);
                return;
            }
            
            // NB: this won't print browser objects like DOMRect...
            if (Array.from(Object.keys(obj)).length === 0) {
                console.log(log, colorStyle);
                return;
            }

            console.log(log, colorStyle, obj);
            return;
        }
    }

}