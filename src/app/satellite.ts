export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational
    } 
    
    // 6)modified here
    shouldShowWarning():boolean{
        console.log("shouldShowWarning")
    if(this.type === "Space Debris"){
        console.log("shouldShowWarning = TRUE")
    return true;
    } else {
        console.log("shouldShowWarning = FALSE")
    return false;
    }
    }
    
}

