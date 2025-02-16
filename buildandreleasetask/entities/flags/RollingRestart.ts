import BooleanCommandFlagBase from './BooleanCommandFlagBase'

class RollingRestart extends BooleanCommandFlagBase {
    constructor() {
        super("rollingRestart", "--rolling-restart")
    }
}

export default RollingRestart;