1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getELementById selects an html element with the specific id,
    getELementsByClassName returns a collection or list of html element that have that class name.
    the querySelector method takes any css selector as parameter and returns the first element that matches the parameter.
    querySelectorALl works like querySelector but returns a collection of elements with all the matching css selectors. 

2. How do you create and insert a new element into the DOM?
Ans: you can create a new element using the document.createElement method and pass the html tag as string parameter. example: document.createELement('div');
you can insert a new element with methods like 'appendChild', 'append' or event as a string using the innerHtml method to set a new value. 

3. What is Event Bubbling? And how does it work?
Ans: when an event happens in the document, for example a click event on a button the event first triggers on that button and then moves upward element by element. from parentNode to parentNode untill it reaches the document . this is called event bubbling. 

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event delegation is the method to handle all the events on child elements by attaching one single eventlistener on the parent element. 
due to event bubbling when a child element is clicked that event reaches the parent NOde and the parent node handles the event by checking which child node triggered it. 
It is usefull because in this way we don't have to attach an event to every element that might trigger an event, just add it to the parent and the code stays much clean. 

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() prevents the brower from performing its default function. for example when clicking on a submit button of a form the page reloads, but if we prevent the default action it stops the page from reloading. 
stopPropagation stops the event bubbling. so if we use stopPropagation() the event delegation method no longer works properly. 