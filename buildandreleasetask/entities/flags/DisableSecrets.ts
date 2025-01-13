import CommandFlagBase from './CommandFlagBase'

class DisableSecrets extends CommandFlagBase {
    constructor() {
        super("disableSecrets", "--disable-secrets")
    }

    getCommandLineArgument(): string {
        if(this.getValue() === "true") {
            return ` ${this.commandLineArgumentName}`;
        }

        return "";
    }
}

export default DisableSecrets;