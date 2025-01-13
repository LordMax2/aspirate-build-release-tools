import CommandFlagBase from "./CommandFlagBase";

class LaunchProfile extends CommandFlagBase {
    constructor() {
        super("launchProfile", "--launch-profile")
    }
}

export default LaunchProfile;