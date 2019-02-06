

        /*1. USA
  Define function getUSA()
  Find the html element that contains "USA".
  Print that element's contents.
  */
        function getUSA() {
            let tagElements = document.getElementsByTagName("*");//get all tags 
            let textSearchedFor = "USA";
            let content;

            for (let i = 0; i < tagElements.length; i++) {
                if (tagElements[i].textContent == textSearchedFor) {
                    content = tagElements[i];
                    break;
                }
            }
            console.log(content.textContent);

        }
        getUSA();

        /*
2. Sales
Define function getPeopleInSales()
Print the names of all the people in the sales department.
*/
        function getPeopleInSales() {
            let tagElements = document.getElementsByTagName("*");
            let peopleFromSales = [];

            for (let i = 0; i < tagElements.length; i++) {
                if (tagElements[i].textContent === 'Sales') {
                    peopleFromSales[i] = tagElements[i].previousElementSibling.innerHTML;
                    console.log(peopleFromSales[i]);
                }
            }
        }
        getPeopleInSales();

        /*
3. Click Here
Define function getAnchorChildren()
Find all anchor elements with a <span> child.
Print the contents of <span>
*/
        function getAnchorChildren() {

            let anchorElements = document.getElementsByTagName('a');
            for (let anchorChild of anchorElements) {
                let spanFound = anchorChild.querySelector('span');
                if (spanFound) {
                    console.log(spanFound.innerHTML);
                }
            }
        }

        getAnchorChildren();

        /*
        4. Hobbies
        Define function getHobbies()
        Find all checked options in the 'skills' select element.
        Print the value and the contents.
        */
        function getHobbies() {
            let selectElements = document.querySelector('[name=hobbies]');
            let options = selectElements.getElementsByTagName('option');

            for (let i = 0; i < options.length; i++) {
                let selected = options[i].getAttribute('selected') === 'selected';
                if (selected) {
                    let val = options[i].getAttribute('value');
                    console.log(`Value: ${val} --- Content: ${options[i].innerHTML}`);
                }
            }
        }
        getHobbies();

        /*5. Custom Attribute
    Define function getCustomAttribute()
    Find all elements with "data-customAttr" attribute
    Print the value of the attribute.
    Print the element that has the attribute.
    */
        function getCustomAttribute() {

            let elementWithAttribute = document.querySelectorAll('[data-customAttr]');
            for (let i = 0; i < elementWithAttribute.length; i++) {
                let value = elementWithAttribute[i].getAttribute('data-customAttr');
                console.log(`Value: ${value}, ${elementWithAttribute[i]}`);
            }
        }
        getCustomAttribute();
        //6. Sum Event
        //NOTE: Write unobtrusive Javascript
        //Regarding these elements:
        //	<input id="num1" class="nums" type="text"/>
        //	<input id="num2" class="nums" type="text"/>
        //	<h3>Sum: <span id="sum"></span></h3>

        //Define onchange event handler.
        ///Add <input> element values.
        //Put the sum in the <span> element.
        //If values cannot be added, put "Cannot add" in the <span> element

        (function () {
            const num1 = document.getElementById('num1');
            const num2 = document.getElementById('num2');
            const sumResult = document.getElementById('sum');
            const regexCheck = new RegExp('^[0-9]*$');

            num1.value = '0';
            num2.value = '0';
            sumResult.innerHTML = '0';

            function add(ev) {
                if (regexCheck.test(num1.value) && regexCheck.test(num2.value)) {
                    sumResult.innerHTML = +num1.value + +num2.value;
                    return;
                }
                sumResult.innerHTML = 'Cannot Add';

            }

            num1.addEventListener('input', add);
            num2.addEventListener('input', add);
        })();


        /*7. Skills Event
        NOTE: Write unobtrusive Javascript
        When user selects a skill, create an alert with a message similar to:
            "Are you sure CSS is one of your skills?"
        NOTE: no alert should appear when user deselects a skill.*/
        function skillsEvent() {
            let selectElements = document.querySelector('[name=skills]');
            // let options = selectElements.getElementsByTagName('option');
            selectElements.addEventListener('change', selectItem);
            function selectItem(event) {
                let skillSelected = event.target.value;
                alert(`Are you sure ${skillSelected} is one of your skills?`);
            }
        }
        skillsEvent();


        /*
        8. Favorite Color Event
        NOTE: Write unobtrusive Javascript
        NOTE: This is regarding the favoriteColor radio buttons.
        When a user selects a color, create an alert with a message similar to:
            "So you like green more than blue now?"
        In this example, green is the new value and blue is the old value.
        Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
        */

        (function () {
            let colorRadioButtons = document.querySelectorAll('[name=favoriteColor]');
            let colorSelected = document.querySelector('[name=colors]');
            let oldColor = colorSelected.value;
            let newColor = null;

            colorSelected.addEventListener('change', showColors);

            function showColors(event) {
                newColor = event.target.value;
                alert(`So you like ${newColor} more than ${oldColor} now?`);
                oldColor = event.target.value;
                for(radio of colorRadioButtons){
                    radio.value.style.color=newColor;
                }
              
            }

        })();


        /*9. Show/Hide Event
NOTE: Write unobtrusive Javascript
When user hovers over an employees name:
	Hide the name if shown.
	Show the name if hidden.*/

        (function () {
            let employees = document.getElementsByClassName('empName');
            for (let employee of employees) {
                employee.style.opacity = '1';
                employee.addEventListener('mouseover', (e) => {
                    if (employee.style.opacity === '0') {
                        employee.style.opacity = '1';
                    }
                    else {
                        employee.style.opacity = '0';
                    }
                })
            }
        })();

        /*
        10. Current Time
        Regarding this element:
            <h5 id="currentTime"></h5>
        Show the current time in this element in this format: 9:05:23 AM
        The time should be accurate to the second without having to reload the page.
        */

        setInterval(function () {
            let currentTime = document.getElementById('currentTime');
            let time = new Date();
            currentTime.innerHTML = time.toLocaleTimeString();
        }, 1000);

        /*11. Delay Regarding this element:
            <p id="helloWorld">Hello, World!</p>
        Three seconds after a user clicks on this element, change the text to a random color.
        */
        let helloWorld = document.getElementById('helloWorld');
        helloWorld.addEventListener('click', (e) => {
            window.setTimeout(changeColor, 3000)});
            function changeColor () {
                let color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' +
                    (Math.floor(Math.random() * 256)) + ')';
                helloWorld.style.color = color;
            }


        /*12. Walk the DOM
        Define function walkTheDOM(node, func)
        This function should traverse every node in the DOM. Use recursion.
        On each node, call func(node).
        */

         function walkTheDOM(node, func) {
            if (node.childElementCount > 0) {
                for (let i = 0; i < node.children.length; i++) {
                walkTheDOM(node.children[i], func);
                }
            }
            func(node);
        }
        walkTheDOM(document.getElementsByTagName('html')[0], console.log);
   
