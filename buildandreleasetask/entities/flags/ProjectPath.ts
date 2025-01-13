import CommandFlagBase from "./CommandFlagBase";

class ProjectPath extends CommandFlagBase {
    constructor() {
        super("projectPath", "--project-path")
    }
}

export default ProjectPath;