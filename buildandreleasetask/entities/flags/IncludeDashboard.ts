import BooleanCommandFlagBase from './BooleanCommandFlagBase'

class IncludeDashboard extends BooleanCommandFlagBase {
    constructor() {
        super("includeDashboard", "--include-dashboard")
    }
}

export default IncludeDashboard;