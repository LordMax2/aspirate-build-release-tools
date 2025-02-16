import BooleanCommandFlagBase from './BooleanCommandFlagBase'

class SkipFinal extends BooleanCommandFlagBase {
    constructor() {
        super("skipFInal", "--skip-final")
    }
}

export default SkipFinal;