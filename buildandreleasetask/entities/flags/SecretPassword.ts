import CommandFlagBase from "./CommandFlagBase";

class SecretPassword extends CommandFlagBase {
    constructor() {
        super("secretPassword", "--secret-password")
    }
}

export default SecretPassword;