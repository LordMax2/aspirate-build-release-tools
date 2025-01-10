import * as tl from "azure-pipelines-task-lib/task";
import { exec } from 'child_process';

function Generate() {
    console.log('Generating Aspir8 manifest');
    
    const inputOutputFormat: string | undefined = tl.getInput('outputFormat', true);
    const inputDisableSecrets: string | undefined = tl.getInput('disableSecrets', true);
    const inputIncludeDashboard: string | undefined = tl.getInput('includeDashboard', true);
    const inputWorkingDirectory: string | undefined = tl.getInput('workingDirectory', false);
    
    if(inputOutputFormat === undefined) throw new Error("outputFormat is missing...");
    if(inputDisableSecrets === undefined) throw new Error("disableSecrets is missing...");
    if(inputIncludeDashboard === undefined) throw new Error("includeDashboard is missing...");

    let command: string = `aspirate generate --non-interactive`;

    if(inputOutputFormat !== "") {
        command += ` --output-format ${inputOutputFormat}`;
    } 

    if(inputDisableSecrets === "true") {
        command += " --disable-secrets";
    } 

    if(inputIncludeDashboard === "true") {
        command += " --include-dashboard";
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

export default Generate;
