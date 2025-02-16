import CommandFlagBase from "./CommandFlagBase";

class CommaSeperatedArrayCommandFlagBase extends CommandFlagBase {
    constructor(name: string, commandLineArgumentName: string) {
        super(name, commandLineArgumentName)
    }

    getCommandLineArgument(): string {
        if(this.getValue() !== undefined && this.getValue() !== "") {
            let commandString: string = "";

            this.getValue().toString().split(",").forEach((keyValuePair: any) => {
                commandString += `${this.commandLineArgumentName}=${keyValuePair}`;
            });

            return commandString;
        }

        return "";
    }
}

export default CommaSeperatedArrayCommandFlagBase;