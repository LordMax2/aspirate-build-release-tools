import * as tl from "azure-pipelines-task-lib/task";

class CommandFlagBase {
    name: string;
    commandLineArgumentName: string;
    
    constructor(name: string, commandLineArgumentName: string) {
        this.name = name;
        this.commandLineArgumentName = commandLineArgumentName;
    }

    getValue(): any {
        const value: string | undefined = tl.getInput(this.name, false);

        return value;
    }

    getCommandLineArgument(): string {
        if(this.getValue() !== undefined && this.getValue() !== "") {
            return ` ${this.commandLineArgumentName} ${this.getValue()}`;
        }

        return "";
    }
}

export default CommandFlagBase;