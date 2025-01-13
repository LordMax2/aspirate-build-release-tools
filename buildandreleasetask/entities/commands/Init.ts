import * as tl from "azure-pipelines-task-lib/task";
import { exec } from 'child_process';
import DisableSecrets from '../flags/DisableSecrets'
import CommandFlagBase from "../flags/CommandFlagBase";
import ProjectPath from "../flags/ProjectPath";
import ContainerImageTag from "../flags/ContainerImageTag";
import ContainerRegistry from "../flags/ContainerRegistry";
import ContainerRepositoryPrefix from "../flags/ContainerRepositoryPrefix";
import ContainerBuilder from "../flags/ContainerBuilder";
import TemplatePath from "../flags/TemplatePath";

const commandFlags: CommandFlagBase[] = [
    new ProjectPath(),
    new ContainerBuilder(),
    new ContainerRegistry(),
    new ContainerRepositoryPrefix(),
    new ContainerImageTag(),
    new TemplatePath(),
    new DisableSecrets()
]

function Init() {
    console.log('Initializing Aspir8');
    
    let command: string = "aspirate init --non-interactive";

    commandFlags.forEach(flag => {
        command += `${flag.getCommandLineArgument()}`; 
    });

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
        console.log(`Aspirate installed successfully: ${stdout}`);
    });
}

export default Init;
