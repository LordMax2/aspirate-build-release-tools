import CommandFlagBase from "./CommandFlagBase";

class ContainerImageTag extends CommandFlagBase {
    constructor() {
        super("containerImageTag", "--container-image-tag")
    }
}

export default ContainerImageTag;