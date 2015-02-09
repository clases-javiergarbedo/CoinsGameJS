

/************ 
 * Class declaration 
 ************/

function CoinsGame() {
    
    /************ 
     * Properties declaration 
     ************/
    
    this.gameboard = new Array();
    this.MOVEMENT_VALIDATION_OK = 0;
    this.MOVEMENT_VALIDATION_OUT_OF_RANGE = 1;
    this.MOVEMENT_VALIDATION_UNDEFINED = 2;
    
    
    // Init gameboard with: "**** ####"
    for(var i = 0; i < 4; i++) {
        this.gameboard[i] = "*";
    } 
    this.gameboard[4] = " ";
    for(var i = 5; i < 9; i++) {
        this.gameboard[i] = "#";
    } 
};
    
/************ 
* Methods declaration
************/

CoinsGame.prototype.getGameboard = function() {
    var result = "<pre>";
    for(var i = 0; i < this.gameboard.length; i++) {
        result += i;
    }
    result += "<br>";
    for(var i = 0; i < this.gameboard.length; i++) {
        result += this.gameboard[i];
    }
    result += "</pre>";
    return result;
};

CoinsGame.prototype.getMovementValidation = function(movementPosition) {
    console.log("Movement validation for position: " + movementPosition);
    if(typeof movementPosition === "undefined") {
        console.log("Movement position undefined");
        return this.MOVEMENT_VALIDATION_UNDEFINED;
    } else {
        if(movementPosition < 0 || movementPosition >= this.gameboard.length) {
            console.log("Movement attempt out of range");
            return this.MOVEMENT_VALIDATION_OUT_OF_RANGE;
        } else {
            console.log("Movement correct");
            return this.MOVEMENT_VALIDATION_OK;
        }
    }
};

CoinsGame.prototype.moveCoin = function(movementPosition) {
    var movementPositionInt = parseInt(movementPosition);
    switch(this.gameboard[movementPositionInt]) {
        case "*":
            // Move to right if posible
            console.log("In +1:" + this.gameboard[movementPositionInt + 1] + "!");
            if(this.gameboard[movementPositionInt + 1] === " ") {
                this.gameboard[movementPositionInt + 1] = "*";
                this.gameboard[movementPositionInt] = " ";
                console.log("Move 1");
                return true;
            } else if(this.gameboard[movementPositionInt + 1] === "#" && 
                    this.gameboard[movementPositionInt + 2] === " ") {
                this.gameboard[movementPositionInt + 2] = "*";
                this.gameboard[movementPositionInt] = " ";
                console.log("Move 2");
                return true;
            } else {
                console.log("Move 0");
                return false;
            }
            break;
        case "#":
            // Move to left if posible
            if(this.gameboard[movementPositionInt - 1] === " ") {
                this.gameboard[movementPositionInt - 1] = "#";
                this.gameboard[movementPositionInt] = " ";
                console.log("Move -1");
                return true;
            } else if(this.gameboard[movementPositionInt - 1] === "*" && 
                    this.gameboard[movementPositionInt - 2] === " ") {
                this.gameboard[movementPositionInt - 2] = "#";
                this.gameboard[movementPositionInt] = " ";
                console.log("Move -2");
                return true;
            } else {
                console.log("Move 0");
                return false;
            }
            break;
        case " ":
            // Don´t move
            console.log("Don't move");
            return false;
            break;
    }
    
};


