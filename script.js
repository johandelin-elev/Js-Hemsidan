// /**/ Organiserat någorlunda.

/* CONSOLE / DEBUG */

console.log("js Loaded");

/*___________________________________________________________________________________________*/


//PAGE

/* DOM ELEMENTS */

//Debug
const DebugUI = document.getElementById("debug-ui");
const DebugSequence = ["D", "E", "B", "U", "G", "Enter"];

//Debug Mouse
const DebugX = document.getElementById("debug-mouse-x");
const DebugY = document.getElementById("debug-mouse-y");

const DebugButtons = document.querySelectorAll(".debug-nav-button");

//HTML
const HtmlElement = document.querySelector("html");

// Cart
const Cart = document.getElementById("checkout");
const checkoutWindow = document.getElementById("checkoutWindow");

//New Changes Button
const newChangesButton = document.getElementById("new-changes-button");
//Changes
const newChanges = document.getElementById("new-changes-container")

// Account Dropdown
const accountButton = document.getElementById("account-button");
const Dropdown = document.getElementById("account-dropdown");
const dropdownContainer = document.getElementById("account-container");
const dropdownList = document.getElementById("dropdown-list");

/*___________________________________________________________________________________________*/

/* EVENT LISTENERS */

//Mouse Move
document.addEventListener("mousemove", handleMouseMove);

// Click
document.addEventListener("click", handleClick);

// Cart
Cart.addEventListener("click", function() {
    //Show Checkout Window & Disable Scroll
    checkoutWindow.style.display = "flex";
    HtmlElement.style.overflowY = "hidden";
});

// Account
accountButton.addEventListener("click", function() {
    Dropdown.style.display = "flex";
    HtmlElement.style.overflowY = "hidden";
});

//Key Press
document.addEventListener("keydown", handleKey);

//New Changes
if (newChangesButton) {
    newChangesButton.addEventListener("click", function() {
        newChanges.scrollIntoView({behavior: "smooth", block: "start" });
    });
}

/*____________________________________________________________________________________________*/




/* VARIABLES */
let keyInputSequence = [];


/*____________________________________________________________________________________________*/



/* FUNCTIONS */


// Handle KEYS and Different ELEMENTS
function handleKey(event) {
    console.log(event.key);
    
    //CheckoutWindow & Dropdown
    if (checkoutWindow.style.display !== "none") {
        if (event.key === "Escape") {
            checkoutWindow.style.display = "none";
            HtmlElement.style.overflowY = "";
        }
    }

    if (Dropdown.style.display !== "none") {
        if (event.key === "Escape") {
            Dropdown.style.display = "none";
            HtmlElement.style.overflowY = "";
        }
    }

    /* Debug (Förstår inte riktigt .join helt och hållet).
    Är ganska säker på att den sätter "," bakom DebugSequence och keyInputSquence 
    och jämför om bokstäverna matchar. */

    keyInputSequence.push(event.key); //Push input key into the sequence

    // If Keystrokes matches array of keys (Open debug window)
    if (keyInputSequence.length > DebugSequence.length) {
        keyInputSequence.shift();

        console.log(keyInputSequence);

        if (keyInputSequence.join(",") === DebugSequence.join(",")) {
            DebugUI.style.display = "flex";
            HtmlElement.style.overflowY = "hidden";
        }   
    }

    if (event.key === "Escape" && DebugUI.style.display !== "none") {
        DebugUI.style.display = "none";
        handleScrollToggleOn();
    }

}

//HANDLE CLICK
function handleClick(event) {
    if (DebugUI.style.display !== "flex") {
        if (!dropdownContainer.contains(event.target) && checkoutWindow.style.display !== "flex") {
            handleScrollToggleOn();
        }
    
        if (checkoutWindow.style.display !== "none" && event.target === checkoutWindow) {
            handleScrollToggleOn();
        }
    }
}

function handleScrollToggleOn() {
    HtmlElement.style.overflowY = "";
    checkoutWindow.style.display = "none";
    Dropdown.style.display = "none";
}


function handleMouseMove(event) {
    if (DebugUI.style.display !== "none") {
        DebugX.textContent = "X:" + event.clientX;
        DebugY.textContent = "Y:" + event.clientY;
    }
}






/*____________________________________________________________________________________________*/