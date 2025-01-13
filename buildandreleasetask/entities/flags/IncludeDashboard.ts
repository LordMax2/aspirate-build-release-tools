import CommandFlagBase from './CommandFlagBase'

class IncludeDashboard extends CommandFlagBase {
    constructor() {
        super("includeDashboard", "--include-dashboard")
    }

    getCommandLineArgument(): string {
        if(this.getValue() === "true") {
            return ` ${this.commandLineArgumentName}`;
        }

        return "";
    }
}

export default IncludeDashboard;