let person = "Subscriber";
let authorizedPgm;

switch (person) {
    case("Employee") : {
        authorizedPgm  = "Authorized for Dietary services";
        break;
    } 
    case("Enrolled Member") : { 
        authorizedPgm = "Authorized for Dietary Services and Dietician";
        break;
    }
    case("Subscriber") : { 
        authorizedPgm = "Partially authorized for Dietary Services";
        break;
    }
    case("Non-Subscriber") : { 
        authorizedPgm = "Enroll or subscribe to access services";
        break;
    }
    default : authorizedPgm = "Enroll or subscribe to access services";
}

console.log("Authrization Status :", authorizedPgm);
