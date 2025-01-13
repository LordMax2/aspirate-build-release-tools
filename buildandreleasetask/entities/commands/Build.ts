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

const commandFlags: CommandFlagBase[] = [
    new AspireManifest(),
    new DisableSecrets(),
    new LaunchProfile(),
    new ProjectPath(),
    new ContainerImageTag(),
    new ContainerRegistry(),
    new ContainerRepositoryPrefix(),
    new ContainerBuilder(),
    new RuntimeIdentifier(),
    new ComposeBuild()
]

function Build() {
    console.log('Building Aspir8 manifest');

    let command: string = `aspirate build --non-interactive`;

    commandFlags.forEach(flag => {
        command += `${flag.getCommandLineArgument()}`; 
    });

    console.log(command);
    
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

export default Build;
