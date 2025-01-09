import { exec } from 'child_process';

function DotnetVersionTest() {
    console.log('Executing dotnet --version command');

    exec("dotnet --version", (error: Error | null, stdout: string, stderr: string) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`dotnet version: ${stdout}`);
    });
}

export default DotnetVersionTest;
