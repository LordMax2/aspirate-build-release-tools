import CommandFlagBase from "./CommandFlagBase";

class PrivateRegistryUsername extends CommandFlagBase {
    constructor() {
        super("privateRegistryUsername", "--private-registry-username")
    }
}

export default PrivateRegistryUsername;