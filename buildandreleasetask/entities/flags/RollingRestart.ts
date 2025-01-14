import CommandFlagBase from './CommandFlagBase'

class RollingRestart extends CommandFlagBase {
    constructor() {
        super("rollingRestart", "--rolling-restart")
    }

    getCommandLineArgument(): string {
        if(this.getValue() === "true") {
            return ` ${this.commandLineArgumentName}`;
        }

        return "";
    }
}

export default RollingRestart;