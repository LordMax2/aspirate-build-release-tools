import BooleanCommandFlagBase from './BooleanCommandFlagBase'

class SkipBuild extends BooleanCommandFlagBase {
    constructor() {
        super("skipBuild", "--skip-build")
    }
}

export default SkipBuild;