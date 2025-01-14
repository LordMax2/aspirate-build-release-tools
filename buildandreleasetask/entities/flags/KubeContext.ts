import CommandFlagBase from "./CommandFlagBase";

class KubeContext extends CommandFlagBase {
    constructor() {
        super("kubeContext", "--kube-context")
    }
}

export default KubeContext;