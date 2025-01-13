import CommandFlagBase from './CommandFlagBase'

class DisableState extends CommandFlagBase {
    constructor() {
        super("disableState", "--disable-state")
    }

    getCommandLineArgument(): string {
        if(this.getValue() === "true") {
            return ` ${this.commandLineArgumentName}`;
        }

        return "";
    }
}

export default DisableState;