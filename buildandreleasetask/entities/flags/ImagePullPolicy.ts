import CommandFlagBase from "./CommandFlagBase";

class ImagePullPolicy extends CommandFlagBase {
    constructor() {
        super("imagePullPolicy", "--image-pull-policy")
    }
}

export default ImagePullPolicy;