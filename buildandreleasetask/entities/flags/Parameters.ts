import CommaSeperatedArrayCommandFlagBase from "./CommaSeperatedArrayCommandFlagBase";

class Parameters extends CommaSeperatedArrayCommandFlagBase {
    constructor() {
        super("parameters", "--parameter")
    }
}

export default Parameters;