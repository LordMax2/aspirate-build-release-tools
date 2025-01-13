import CommandFlagBase from "./CommandFlagBase";

class ContainerRegistry extends CommandFlagBase {
    constructor() {
        super("containerRegistry", "--container-registry")
    }
}

export default ContainerRegistry;