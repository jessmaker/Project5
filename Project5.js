/**
 *   @author Essmaker, Jo'Anne (joannessmaker@gmail.com)
 *   @summary PROJECt 5 || created: 11/25/2017
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let numPeople, zonesCrossed, totalTicketCharge;

function main() {
    process.stdout.write('\x1Bc');
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setNumPeople();
        setZonesCrossed();
        setTotalTicketCharge();
        printTotalTicketCharge();
        setContinueResponse();
        return main();
    }
    printGoodbye();

}

main();

/**
 * @method setContinual Response
 * @desc Continual Response Mutator
 */
function setContinueResponse() {
    if (continueResponse === 1) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        if (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = 1;
            setContinueResponse(); //improper recursion
        }
    } else {
        continueResponse = 1;
    }
}

/**
* @method setPassengerTotal
* @desc Total Number of Passengers
*/
function setNumPeople() {
    numPeople = Number(PROMPT.question(`\nHow Many Passengers Will Be Traveling This Trip?  `));
    if (numPeople < 0 || numPeople > 4) {
        console.log(`I'm Sorry, Please Enter the Total Number of Passengers (1-4) and please Try Again. `);
        return setNumPeople();
    }
}

/**
* @method setZonesCrossed
* @desc Total Number of Zones Crossed
*/
function setZonesCrossed() {
    zonesCrossed = Number(PROMPT.question(`\nHow Many Zones Will You Be Crossing This Trip?  `));
    if (zonesCrossed < 0 || zonesCrossed > 3) {
        console.log(`I'm Sorry, Please Enter the Total Number of Zones You Will Be Crossing (0-3) and please Try Again. `);
        return setZonesCrossed();
    }
}

/**
 * @method setTotalTicketCharge
 * @desc Calculation of Total Ticket Charge
 */
function setTotalTicketCharge() {
    totalTicketCharge = 0;
    if (numPeople === 1 && zonesCrossed === 0) {
        totalTicketCharge = 7.50;
    }  else if (numPeople === 1 && zonesCrossed === 1) {
        totalTicketCharge = 10.00;
    }  else if (numPeople === 1 && zonesCrossed === 2) {
        totalTicketCharge = 12.00;
    }  else if (numPeople === 1 && zonesCrossed === 3) {
        totalTicketCharge = 12.75;
    }  else if (numPeople === 2 && zonesCrossed === 0) {
        totalTicketCharge = 14.00;
    }  else if (numPeople === 2 && zonesCrossed === 1) {
        totalTicketCharge = 18.50;
    }  else if (numPeople === 2 && zonesCrossed === 2) {
        totalTicketCharge = 22.00;
    }  else if (numPeople === 2 && zonesCrossed === 3) {
        totalTicketCharge = 23.00;
    }  else if (numPeople === 3 && zonesCrossed === 0) {
        totalTicketCharge = 20.00;
    }  else if (numPeople === 3 && zonesCrossed === 1) {
        totalTicketCharge = 21.00;
    }  else if (numPeople === 3 && zonesCrossed === 2) {
        totalTicketCharge = 32.00;
    }  else if (numPeople === 3 && zonesCrossed === 3) {
        totalTicketCharge = 33.00;
    }  else if (numPeople === 4 && zonesCrossed === 0) {
        totalTicketCharge = 25.00;
    }  else if (numPeople === 4 && zonesCrossed === 1) {
        totalTicketCharge = 27.50;
    }  else if (numPeople === 4 && zonesCrossed === 2) {
        totalTicketCharge = 36.00;
    }  else {
        totalTicketCharge = 37.00;
        }
    }

/**
* @method printTotalTicketCharge
* @desc Total Ticket Charge
*/
function printTotalTicketCharge() {
    console.log(`\nYour Total Charges are \$${totalTicketCharge}`);
}

/**
 * @method printGoodbye
 * @desc Print Goodbye
 */
function printGoodbye() {
    console.log(`\nThank You! Goodbye.`);
}


/*
The MidAmerica Bus Company charges fares to passengers based on the number of travel zones they cross.
Additionally, discounts are provided for multiple passengers traveling together. Ticket fares are...
Passengers vs Zones
            0	    1	    2	    3
(0)1	7.50	10.00	12.00	12.75
(1)2	14.00	18.50	22.00	23.00
(2)3	20.00	21.00	32.00	33.00
(3)4	25.00	27.50	36.00	37.00

Develop the logic for a program that accepts the number of passengers and zones crossed as input.
The output is the ticket charge.
*/

/* PROJECT COMPLETION
1) CREATING JSDOC OUT FILE... IN TERMINAL WINDOW > TYPE jsdoc (name of code file) > ENTER > REFRESH PROJECT TO SEE NEW FOLDER CALLED "OUT" IN THE LEFT WINDOW
2) JSDOC URL... CLICK ON THE "OUT" FILE > DOUBLE CLICK ON INDEX.HTML FILE > HOVER OVER WINDOW > CLICK ON BROWSER > COPY/PASTE URL TO SHARE
3) CREATE GIT REPOSITORY... VCS > IMPORT INTO VERSION CONTROL > CREATE GIT REPOSITORY (SHOULD DEFAUT TO CORRECT FILE LOCATION) > CLICK OK (FILES ON LEFT TURN RED)
   > CLICK ON PARENT DIRECTORY > RIGHT CLICK > GIT > ADD > (ALL FILES SHOULD TURN GREEN)
4) PUSH PROJECT UP TO GITHUB... VCS > IMPORT INTO VERSION CONTROL > SHARE PROJECT ON GITHUB > DOUBLE CHECK NAME > ORIGON IS OK > ENTER DESCRIPTION > CLICK SHARE
   > (MAKE SURE WINDOW STATES "INTIAL COMMIT" AND ALL BOXES ARE CHECKED) > CLICK OK
5) DOUBLE CHECK GIT HUB REPOSITORY...YOU SHOULD SEE PROJECT AND ALL FILES THAT WERE PUSHED UP TO GITHUB
*/