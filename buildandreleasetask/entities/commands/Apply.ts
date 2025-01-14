import * as tl from "azure-pipelines-task-lib/task";
import { exec } from 'child_process';
import CommandFlagBase from "../flags/CommandFlagBase";
import InputPath from "../flags/InputPath";
import KubeContext from "../flags/KubeContext";
import SecretPassword from "../flags/SecretPassword";
import DisableSecrets from "../flags/DisableSecrets";
import RollingRestart from "../flags/RollingRestart";

const commandFlags: Set<CommandFlagBase> = new Set<CommandFlagBase>([
    new InputPath(),
    new KubeContext(),
    new SecretPassword(),
    new DisableSecrets(),
    new RollingRestart()
]);

function Apply() {
    console.log('Applying Aspir8 manifest');

    let command: string = `aspirate apply --non-interactive`;

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

export default Apply;
