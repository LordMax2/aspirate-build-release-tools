import CommandFlagBase from './CommandFlagBase'

class BooleanCommandFlagBase extends CommandFlagBase {
    constructor(name: string, commandLineArgumentName: string) {
        super(name, commandLineArgumentName)
    }

    getCommandLineArgument(): string {
        if(this.getValue() === "true") {
            return ` ${this.commandLineArgumentName}`;
        }

        return "";
    }
}

export default BooleanCommandFlagBase;