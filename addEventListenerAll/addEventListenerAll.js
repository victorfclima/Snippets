class MultipleEvents {

    constructor() {
        this.initButtonEvents() //Initiate the method 1
        this.initButtonEvents() //Initiate the method 2
    }

    // Method 1: Convert the string that contains all events into array and create a single event for each one
    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach((event) => {
            element.addEventListener(event, fn)
        });
    }

    // Method 2: Apply the events on the DOM element
    initButtonEvents() {
        let button = document.querySelector('#btn') //Locate your DOM element
        this.addEventListenerAll(button,
            'click contextmenu dblclick mouseover mouseout', //Change the events that you want listen, here
            e => {
                console.log(e.type) //Check all events being tracked on the console
            })
    }

}

let objbutton = new MultipleEvents


