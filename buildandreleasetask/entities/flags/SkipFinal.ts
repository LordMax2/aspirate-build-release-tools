import CommandFlagBase from './CommandFlagBase'

class SkipFinal extends CommandFlagBase {
    constructor() {
        super("skipFInal", "--skip-final")
    }

    getCommandLineArgument(): string {
        if(this.getValue() === "true") {
            return ` ${this.commandLineArgumentName}`;
        }

        return "";
    }
}

export default SkipFinal;