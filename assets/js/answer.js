// 1. What are  Tagged Templates? 
      /*The default function just concatenates the parts into a single string. 
       If there is an expression preceding the template literal ( tag here), this is called a tagged template . 
       In that case, the tag expression (usually a function) gets called with the template literal, which you can 
       then manipulate before outputting.*/

            //e.g
                  let a = 5;
                    let b = 10;
                    console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);

//2. Explain and demonstrate first class function 
       /*Functions can be assigned to variables
            e.g  */ 
            const sayHello = () => {
                return "Hello";
            }; 
            console.log(sayHello());
        /*Functions can be passed as arguments to other functions
            e.g */   const sayHelloToPerson=(greeter, person) => {
                           return greeter()+" "+person;};
                           console.log(sayHelloToPerson(sayHello, "Jack"));
        /*Functions can be returned from other functions 
            e.g */   const greeterMaker = greeting => {
                           return person => {
                                return greeting + " " + person;
                           };};
                           const sayHiToPerson = greeterMaker("Hi");
                           console.log(sayHiToPerson("Jane"));
                           const sayHowdyToPerson = greeterMaker("Howdy");
                           console.log(sayHowdyToPerson("Bob"));
            
//3. Explain and demo closures 
       /*Roughly, a closure is a block of code that may capture variable values from its surrounding scope. 
         Roughly, a function is a statically defined block of code that may use variable values from its surrounding scope.*/
        // e.g
              function outerFunction (outerVariable){
                    return function innerFunction(innerVariable){
                        console.log('outer variable:' + outerVariable)
                        console.log('inner variable:' + innerVariable)
                    };
              };
              const newFunction = outerFunction('outside')
              newFunction('inside')

//4. Demonstrate the Reflect API 
     /* Here are the things to remember about the Reflect API.
       #It uses Reflect which is a global & static object, thus, you can’t create an instance of it. 
          Likewise, all of its methods are static.
       #It provides a runtime-level of inspecting and manipulating the properties of objects also known 
        as meta-programming. Moreover, prior to ES6, the JavaScript language does provide object reflection 
        API but these weren’t really organized and it throws an exception when it failed. 
        Thus, today, Reflect API with the help of Reflect object improves the way we do meta/reflection programming. */
      //has no constractor cannot use "new"
      const log = console.log;

      let alex = {
             name: 'Alex',
             id: 93,
             hello: function (a,b){
                 console.log(`Hello my name is ${this.name}. ${a} ${b}`);
             },
      };

      Reflect.ownKeys(alex);
       //get array that are properties of object
      Reflect.get(alex,'id');
       //return age value
      Reflect.set(alex, 'id', 94);
       //return boolean true if id exist and change age value
      Reflect.has(alex, 'name');
      //return boolean true if it has name key
      Reflect.apply(target, thisArg, argList);
      Reflect.apply(alex.hello, alex, Reflect.ownKeys(alex));
      //Hello my name is Alex. name id
      Reflect.defineProperty(alex, 'age', {value: 30,enumerable:false});
      //Reflect.construct -> creating constructors without new!
//What is Reflect.construct
       /*-used to invoke functions as constructors
         -This function is called the Target constructor
         -Reflect.construct takes in 3 arguments ie. The target 
         constructor and another constructor whose prototype is used as the prototype of the target constructor*/
         /** start of Reflect.constructor */

//let's define a constructor function
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

console.log(myCustomer.showFullName()); //output: Dr. Necesario, 
                                        //Jin Vincent is from the Philippines

/** end of Reflect.constructor */

//5. What is Export Default  ? Explain with examples 
/*Default Exports: Default exports are useful to export only a single object, function, variable. 
During the import, we can use any name to import.*/
// e.g we have moduleB.js
      let fName = "Simreteab"
      export default fName;
// e.g we have moduleA.js
     import firstName from './moduleB.js'
     console.log(firstName) 
     //or
     import {default as f} from './moduleB.js'
     console.log(firstName); 

//6. what are iterators and generators ? Explain with example
      /*used the name Symbol.iterator. Symbols offer names that are unique and cannot clash with other property names. 
      Also, Symbol.iterator will return an object called an iterator. 
      This iterator will have a method called nextwhich will return an object with keys value and done.
       e.g*/
       const Iterable = {
        [Symbol.iterator]() {
            let step = 0;
            const iterator = {
                next() {
                    step++;
                    if (step === 1)
                        return { value: 'Example', done: 'false' }
                    else if (step === 2)
                        return { value: 'for', done: 'false' }
                    else if (step === 3)
                        return { value: 'Iterator', done: 'false' }
                    return { value: undefined, done: 'true' }
                }
            };
            return iterator;
        }
    }
    var iterator = Iterable[Symbol.iterator]();
    iterator.next() // {value: 'Example', done: 'false'}
    iterator.next() // {value: 'for', done: 'false'}
    iterator.next() // {value: 'iterator', done: 'false'}
    iterator.next() // {value: undefined, done: 'false'}

    /*The new syntax: function* is a new “keyword” for generator functions (there are also generator methods).
    yield is an operator with which a generator can pause itself. 
    Additionally, generators can also receive input and send output via yield.
    e.g*/
    function* increment(i) {
        yield i + 1;
        yield i + 2;
    }
    var obj = increment(10);
    console.log(obj.next()); //{value: 11, done: false}
    console.log(obj.next()); //{value: 12, done: false}
    console.log(obj.next()); //{value: undefined, done: true}
//7. What are Sets and Maps in JS ? Explain with example
       /*A collections of values. You can iterate through the elements of a set in insertion order.
        A value in the Set may only occur once; it is unique in the Sets collection.*/
       const myArray = [1,2,3,4,5];
       const mySet = new Set(myArray);

       console.log(myArray);
       console.log(mySet);

       const uniqueArray = [...mySet];//using spread operater we can back to an array
       console.log(uniqueArray);//[1,2,3,4,5]

       mySet.add(6);
       console.log(mySet);

       mySet.add({channelName: 'JavaScript  Mastery'}); //adding object
       console.log(mySet);//Set {1,2,3,4,5, {channelName: 'JavaScript  Mastery}}
       
       mySet.add([1,2,3]);
       console.log(mySet);//{1,2,3,4,5,[1,2,3]}

       mySet.delete(3);//{1,2,4,5}
       mySet.clear(); // clear all and we get Set{} or empty set
       mySet.has(5);  //return boolean true if it is found 
       mySet.size;  //size of the set // 5 
       //set has not index like we use on array myArray[2] // mySet[2] undefined  
        //*Map *- The Map object allows you to store key-value pairs and remembers the original insertion order of the keys.
             const myMap = new Map([['name', 'John'],['surname', 'Doe']]);
             console.log(myMap);
             //limitation of javascript object
             const myObject = {};
             const a = {};
             const b = {};
             myObject[a] = 'a';
             myObject[b] = 'b';

             console.log(myObject);// {'[object Object]': 'b'}

             const a= {};
             const b = {};

             const myMap = new Map([[a, 'a'],[b, 'b']]);
             console.log(myMap);
             //output
             // Map{{} => 'a', {} => 'b'}
             myMap.set('C', 'c');
             myMap.has('C'); //return true if it exist
             myMap.delete('C');
             myMap.clear();
             myMap.size // return size of the map
             
