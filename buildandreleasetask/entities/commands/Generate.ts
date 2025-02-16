import * as tl from "azure-pipelines-task-lib/task";
import { exec } from 'child_process';
import DisableSecrets from '../flags/DisableSecrets'
import CommandFlagBase from "../flags/CommandFlagBase";
import LaunchProfile from "../flags/LaunchProfile";
import ProjectPath from "../flags/ProjectPath";
import AspireManifest from "../flags/AspireManifest";
import ContainerImageTag from "../flags/ContainerImageTag";
import ContainerRegistry from "../flags/ContainerRegistry";
import ContainerRepositoryPrefix from "../flags/ContainerRepositoryPrefix";
import ContainerBuilder from "../flags/ContainerBuilder";
import RuntimeIdentifier from "../flags/RuntimeIdentifer";
import ComposeBuild from "../flags/ComposeBuild";
import OutputPath from "../flags/OutputPath";
import SkipBuild from "../flags/SkipBuild";
import DisableState from "../flags/DisableState";
import Namespace from "../flags/Namespace";
import SkipFinal from "../flags/SkipFinal";
import ImagePullPolicy from "../flags/ImagePullPolicy";
import OutputFormat from "../flags/OutputFormat";
import SecretPassword from "../flags/SecretPassword";
import PrivateRegistry from "../flags/PrivateRegistry";
import PrivateRegistryUrl from "../flags/PrivateRegistryUrl";
import PrivateRegistryUsername from "../flags/PrivateRegistryUsername";
import PrivateRegistryPassword from "../flags/PrivateRegistryPassword";
import PrivateRegistryEmail from "../flags/PrivateRegistryEmail";
import IncludeDashboard from "../flags/IncludeDashboard";
import Parameters from "../flags/Parameters";

const commandFlags: Set<CommandFlagBase> = new Set<CommandFlagBase>([
    new ProjectPath(),
    new AspireManifest(),
    new OutputPath(),
    new SkipBuild(),
    new DisableState(),
    new Namespace(),
    new SkipFinal(),
    new ContainerImageTag(),
    new ContainerRegistry(),
    new ContainerRepositoryPrefix(),
    new ContainerBuilder(),
    new ImagePullPolicy(),
    new DisableSecrets(),
    new OutputFormat(),
    new RuntimeIdentifier(),
    new SecretPassword(),
    new PrivateRegistry(),
    new PrivateRegistryUrl(),
    new PrivateRegistryUsername(),
    new PrivateRegistryPassword(),
    new PrivateRegistryEmail(),
    new IncludeDashboard(),
    new ComposeBuild(),
    new LaunchProfile(),
    new Parameters()
]);

function Generate() {
    console.log('Generating Aspir8 manifest');

    let command: string = `aspirate generate --non-interactive`;

    commandFlags.forEach(flag => {
        command += `${flag.getCommandLineArgument()}`; 
    });

    console.log("Executing the following command: ");
    console.log(command);
    console.log("--------------------------------");
    
    const workingDirectory: string | undefined = tl.getInput('workingDirectory', false);
     
    exec(command, { cwd: workingDirectory}, (error: Error | null, stdout: string, stderr: string) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`Aspirate successfully generated manifest: ${stdout}`);
    });
}

export default Generate;
