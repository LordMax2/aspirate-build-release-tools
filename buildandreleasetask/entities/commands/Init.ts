import * as tl from "azure-pipelines-task-lib/task";
import { exec } from 'child_process';
import DisableSecrets from '../flags/DisableSecrets';
import CommandFlagBase from "../flags/CommandFlagBase";
import ProjectPath from "../flags/ProjectPath";
import ContainerImageTag from "../flags/ContainerImageTag";
import ContainerRegistry from "../flags/ContainerRegistry";
import ContainerRepositoryPrefix from "../flags/ContainerRepositoryPrefix";
import ContainerBuilder from "../flags/ContainerBuilder";
import TemplatePath from "../flags/TemplatePath";

const commandFlags: Set<CommandFlagBase> = new Set<CommandFlagBase>([
    new ProjectPath(),
    new ContainerBuilder(),
    new ContainerRegistry(),
    new ContainerRepositoryPrefix(),
    new ContainerImageTag(),
    new TemplatePath(),
    new DisableSecrets()
]);

function Init() {
    console.log('Initializing Aspir8');

    let command: string = "aspirate init --non-interactive";

    commandFlags.forEach(flag => {
        console.log(`Adding flag: ${flag.getCommandLineArgument()}`);
        command += `${flag.getCommandLineArgument()}`;
    });

    console.log("Executing the following command: ");
    console.log(command);
    console.log("--------------------------------");

    const workingDirectory: string | undefined = tl.getInput('workingDirectory', false);

    exec(command, { 
        cwd: workingDirectory, 
        env: { 
            ...process.env, 
            PATH: `${process.env.PATH}:${process.env.HOME}/.dotnet/tools` 
        }
    }, (error: Error | null, stdout: string, stderr: string) => {
        if (error) {
            console.error(`exec error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`Aspirate initialized successfully: ${stdout}`);
    });
}

export default Init;
