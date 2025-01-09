import Build from "../commands/Build";
import DotnetVersionTest from "../commands/DotnetVersionTest";
import Generate from "../commands/Generate";
import Init from "../commands/Init";
import Install from "../commands/Install";

function CommandFactory(command: string) {
    switch (command) {
        case "build":
            return Build;
        case "generate":
            return Generate;
        case "init":
            return Init;
        case "install":
            return Install;
        case "dotnetversiontest":
            return DotnetVersionTest;
        default:
            throw new Error(`Command: ${command}, doesnt exist..`);
    }
}

export default CommandFactory;