import CommandFlagBase from './CommandFlagBase'

class SkipBuild extends CommandFlagBase {
    constructor() {
        super("skipBuild", "--skip-build")
    }

    getCommandLineArgument(): string {
        if(this.getValue() === "true") {
            return ` ${this.commandLineArgumentName}`;
        }

        return "";
    }
}

export default SkipBuild;