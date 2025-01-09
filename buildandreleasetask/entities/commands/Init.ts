import * as tl from "azure-pipelines-task-lib/task";
import { exec } from 'child_process';

function Init() {
    console.log('Initializing Aspir8');
    
    const inputContainerRegistry: string | undefined = tl.getInput('containerRegistry', false);
    const inputContainerRepositoryPrefix: string | undefined = tl.getInput('containerRepositoryPrefix', false);
    const inputDisableSecrets: string | undefined = tl.getInput('disableSecrets', true);
    const inputWorkingDirectory: string | undefined = tl.getInput('workingDirectory', true);
    
    if(inputDisableSecrets === undefined) throw new Error("includeDasboard is missing...");

    let command: string = "aspirate init --non-interactive";

    if(inputDisableSecrets === "true") {
        command += " --disable-secrets";
    } 

    if(inputContainerRegistry && inputContainerRegistry !== "") {
        command += ` --container-registry ${inputContainerRegistry}`;
    }

    if(inputContainerRepositoryPrefix && inputContainerRepositoryPrefix !== "") {
        command += ` --container-repository-prefix ${inputContainerRepositoryPrefix}`;
    }

    exec(command, { cwd: inputWorkingDirectory}, (error: Error | null, stdout: string, stderr: string) => {
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
