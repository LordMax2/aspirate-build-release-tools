import CommandFlagBase from "./CommandFlagBase";

class TemplatePath extends CommandFlagBase {
    constructor() {
        super("templatePath", "--template-path")
    }
}

export default TemplatePath;