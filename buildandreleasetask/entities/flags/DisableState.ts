import BooleanCommandFlagBase from './BooleanCommandFlagBase'

class DisableState extends BooleanCommandFlagBase {
    constructor() {
        super("disableState", "--disable-state")
    }
}

export default DisableState;