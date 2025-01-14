import * as tl from "azure-pipelines-task-lib/task";
import { exec } from 'child_process';
import CommandFlagBase from "../flags/CommandFlagBase";
import InputPath from "../flags/InputPath";
import KubeContext from "../flags/KubeContext";
import DisableSecrets from "../flags/DisableSecrets";

const commandFlags: Set<CommandFlagBase> = new Set<CommandFlagBase>([
    new InputPath(),
    new KubeContext(),
    new DisableSecrets()
]);

function Destroy() {
    console.log('Destroying Aspir8 manifest');

    let command: string = `aspirate destroy --non-interactive`;

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

export default Destroy;
