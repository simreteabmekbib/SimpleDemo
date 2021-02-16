
//Functions can be assigned to variables

const sayHello = () => {
    return "Hello";
};
//console.log(sayHello());

//Functions can be passed as arguments to other functions
const sayHelloToPerson = (greeter, person) => {
    return greeter() + " " + person;
};
//console.log(sayHelloToPerson(sayHello, "Jack"));

//Functions can be returned from other functions 
const greeterMaker = greeting => {
    return person => {
        return greeting + " " + person;
    };
};
// const sayHiToPerson = greeterMaker("Hi");
// console.log(sayHiToPerson("Jane"));
// const sayHowdyToPerson = greeterMaker("Howdy");
// console.log(sayHowdyToPerson("Bob"));

function outerFunction (outerVariable){
    return function innerFunction(innerVariable){
        console.log('outer variable:' + outerVariable)
        console.log('inner variable:' + innerVariable)
    };
};
// const newFunction = outerFunction('outside')
// newFunction('inside')

let alex = {
    name: 'Alex',
    id: 93,
    hello: function (a,b){
        console.log(`Hello my name is ${this.name}. ${a} ${b}`);
    },
};
//5

export let fName = Reflect.get(alex,'name')
      export default fName;


function Customer(title,firstName, lastName) {
    
    this.title = title;
    this.firstName = firstName;
    this.lastName = lastName;

    this.showFullName = function () {
        
        return `${this.title}. ${lastName}, ${firstName} is from the ${this.country}`;
    }
}
//let's define another constructor set the prototype to add a new property.
function Employee() { }
Employee.prototype.country = 'Philippines';

const myCustomer = Reflect.construct(Customer, ['Dr','Jin Vincent', 'Necesario'],Employee);


// Define UI Variables 
const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button


// Add Event Listener  [Form , clearBtn and filter search input ]

// form submit 
form.addEventListener('submit', addNewTask);
// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);
//   Filter Task 
filter.addEventListener('keyup', filterTasks);
// Remove task event [event delegation]
taskList.addEventListener('click', removeTask);
// Event Listener for reload 





// Add New  Task Function definition 
function addNewTask(e) {

    e.preventDefault(); //disable form submission


    // Check empty entry
    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";

        return;
    }

    // Create an li element when the user adds a task 
    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
    // Create text node and append it 
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new element for the link 
    const link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to UL 
    taskList.appendChild(li);
    //2
    console.log(sayHelloToPerson(sayHello, taskInput.value));
    const sayHiToPerson = greeterMaker("Hi");
    console.log(sayHiToPerson(taskInput.value));
    //1,3,4
    const newFunction = outerFunction(`Hi ${taskInput.value}`);
    newFunction(Reflect.get(alex,'name'));
    //1,2,3,4
    console.log(sayHiToPerson(myCustomer.showFullName()));
    let arr = [taskInput.value];
    const mySet = new Set(arr);
    console.log(mySet.has(taskInput.value));
    const myMap = new Map([['task', taskInput.value]]);
             console.log(myMap.has('task'));
            
    
}

//6
function* increment(i) {
    yield i;
    return;
}
var obj = increment(Reflect.set(alex, 'id', 94));
console.log(obj.next());
console.log(obj.next());
//6
const Iterable = {
    [Symbol.iterator]() {
        let step = 0;
        const iterator = {
            next() {
                step++;
                if (step === 1)
                    return { value: taskInput.value, done: 'false' }
                    return { value: undefined, done: 'true' }
            }
        };
        return iterator;
    }
}
var iterator = Iterable[Symbol.iterator]();
console.log(iterator.next()); 
console.log(iterator.next()); 
// Clear Task Function definition 
function clearAllTasks() {

    //This is the first way 
    // taskList.innerHTML = '';

    //  Second Wy 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

}



// Filter tasks function definition 
function filterTasks(e) {

    /*  
    Instruction for Handling the Search/filter 
    
    1. Receive the user input from the text input 
    2. Assign it to a variable so the us can reuse it 
    3. Use the querySelectorAll() in order to get the collection of li which have  .collection-item class 
    4. Iterate over the collection item Node List using forEach
    5. On each element check if the textContent of the li contains the text from User Input  [can use indexOf]
    6 . If it contains , change the display content of the element as block , else none
    
    
    */

}

// Remove Task function definition 
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            e.target.parentElement.parentElement.remove();

        }

    }
}

