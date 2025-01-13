import CommandFlagBase from "./CommandFlagBase";

class PrivateRegistryUrl extends CommandFlagBase {
    constructor() {
        super("privateRegistryUrl", "--private-registry-url")
    }
}

export default PrivateRegistryUrl;