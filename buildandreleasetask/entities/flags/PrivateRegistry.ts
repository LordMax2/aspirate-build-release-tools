import BooleanCommandFlagBase from "./BooleanCommandFlagBase";

class PrivateRegistry extends BooleanCommandFlagBase {
    constructor() {
        super("privateRegistry", "--private-registry")
    }
}

export default PrivateRegistry;