import CommandFlagBase from "./CommandFlagBase";

class PrivateRegistryEmail extends CommandFlagBase {
    constructor() {
        super("privateRegistryEmail", "--private-registry-email")
    }
}

export default PrivateRegistryEmail;