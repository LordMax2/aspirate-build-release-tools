import CommandFlagBase from "./CommandFlagBase";

class PrivateRegistryPassword extends CommandFlagBase {
    constructor() {
        super("privateRegistryPassword", "--private-registry-password")
    }
}

export default PrivateRegistryPassword;