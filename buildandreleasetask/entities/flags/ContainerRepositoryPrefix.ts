import CommandFlagBase from "./CommandFlagBase";

class ContainerRepositoryPrefix extends CommandFlagBase {
    constructor() {
        super("containerRepositoryPrefix", "--container-repository-prefix")
    }
}

export default ContainerRepositoryPrefix;