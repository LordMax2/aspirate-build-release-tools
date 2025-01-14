import CommandFlagBase from "./CommandFlagBase";

class InputPath extends CommandFlagBase {
    constructor() {
        super("inputPath", "--input-path")
    }
}

export default InputPath;