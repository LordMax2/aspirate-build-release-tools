import BooleanCommandFlagBase from './BooleanCommandFlagBase';
class ComposeBuild extends BooleanCommandFlagBase {
    constructor() {
        super("composeBuild", "--compose-build")
    }
}

export default ComposeBuild;