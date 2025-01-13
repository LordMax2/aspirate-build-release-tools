import CommandFlagBase from "./CommandFlagBase";

class PrivateRegistry extends CommandFlagBase {
    constructor() {
        super("privateRegistry", "--private-registry")
    }

    getCommandLineArgument(): string {
        if(this.getValue() === "true") {
            return ` ${this.commandLineArgumentName}`;
        }

        return "";
    }
}

export default PrivateRegistry;