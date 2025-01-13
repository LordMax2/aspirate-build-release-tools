import CommandFlagBase from "./CommandFlagBase";

class Namespace extends CommandFlagBase {
    constructor() {
        super("namespace", "--namespace")
    }
}

export default Namespace;