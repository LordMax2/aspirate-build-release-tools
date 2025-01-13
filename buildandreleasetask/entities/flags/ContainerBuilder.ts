import CommandFlagBase from "./CommandFlagBase";

class ContainerBuilder extends CommandFlagBase {
    constructor() {
        super("containerBuilder", "--container-builder")
    }
}

export default ContainerBuilder;