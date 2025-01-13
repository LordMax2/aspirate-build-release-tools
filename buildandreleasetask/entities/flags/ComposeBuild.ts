import CommandFlagBase from './CommandFlagBase'

class ComposeBuild extends CommandFlagBase {
    constructor() {
        super("composeBuild", "--compose-build")
    }

    getCommandLineArgument(): string {
        if(this.getValue() === "true") {
            return ` ${this.commandLineArgumentName}`;
        }

        return "";
    }
}

export default ComposeBuild;