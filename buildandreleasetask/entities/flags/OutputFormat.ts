import CommandFlagBase from "./CommandFlagBase";

class OutputFormat extends CommandFlagBase {
    constructor() {
        super("outputFormat", "--output-format")
    }
}

export default OutputFormat;