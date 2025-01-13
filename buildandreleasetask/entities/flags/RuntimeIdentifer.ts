import CommandFlagBase from "./CommandFlagBase";

class RuntimeIdentifier extends CommandFlagBase {
    constructor() {
        super("runtimeIdentifier", "--runtime-identifier")
    }
}

export default RuntimeIdentifier;