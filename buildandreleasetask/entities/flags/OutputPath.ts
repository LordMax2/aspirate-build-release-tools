import CommandFlagBase from "./CommandFlagBase";

class OutputPath extends CommandFlagBase {
    constructor() {
        super("outputPath", "--output-path")
    }
}

export default OutputPath;