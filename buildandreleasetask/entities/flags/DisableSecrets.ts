import BooleanCommandFlagBase from './BooleanCommandFlagBase'

class DisableSecrets extends BooleanCommandFlagBase {
    constructor() {
        super("disableSecrets", "--disable-secrets")
    }
}

export default DisableSecrets;