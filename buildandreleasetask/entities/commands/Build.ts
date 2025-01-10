import * as tl from "azure-pipelines-task-lib/task";
import { exec } from 'child_process';

function Build() {
    console.log('Building Aspir8 manifest');
    
    const inputDisableSecrets: string | undefined = tl.getInput('disableSecrets', true);
    const inputWorkingDirectory: string | undefined = tl.getInput('workingDirectory', false);
    
    if(inputDisableSecrets === undefined) throw new Error("disableSecrets is missing...");

    let command: string = `aspirate build --non-interactive`;

    if(inputDisableSecrets === "true") {
        command += " --disable-secrets";
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
        console.log(`Aspirate successfully generated manifest: ${stdout}`);
    });
}

export default Build;
