import { exec } from 'child_process';

function Install() {
    console.log('Installing Aspir8...');

    exec("dotnet tool install -g aspirate", (error: Error | null, stdout: string, stderr: string) => {
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

export default Install;
