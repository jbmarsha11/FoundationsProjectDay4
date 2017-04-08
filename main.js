/*=========================================================
    Part 1: Variables
   */
    var givenName;
   // Q: What value is stored in `givenName` right now?
   // A: undefined

   givenName = "Brett";
   // Q: What is `givenName` set to now?
   // A: Brett

   givenName = givenName;
   // Q: What is `givenName` set to now?
   // A: Brett

var greeting;

greeting ='Hello, how are you';

console.log(greeting + ' ' + givenName + '?');

/*=========================================================
  Part 2: Simple Math
  */
  var high = 50;
  var low  = 10;

  var math = high - low;
  // Q: What is `math` set to?
  // A: high - low or 40

  math = high - "5";
  // Q: What is `math` set to?
  // A:high - "5" or 505

 // Using the `high` & `low` Variables, work through each of the 4 math operators below and log the answers to the console.
 // Write Code Below:

 /* =========================================================
     Part 3: Expressions
    */
    // Create a variable to calculate your age
    // The answer should read "NAME is XX years old"
    // The answer should not be written in a comment.
    var born = 1985;
    var today = 2017;
    var age = today - born;
    var yourName = 'Jennifer';
    console.log(yourName +' ' + 'is' + ' ' + age + ' ' + 'years old.');


    // Answers Below:

    // Store some information following in variables.
    var yourName = 'Jennifer';
    var instructorName = 'Briana';

    // Update the variables above so the expression reads correctly.
    // Answers Below:


    // Final Statement
    var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
console.log(statement);

// Question 5
  var firstName = "Julia";
  var lastName = "Roberts";
  var fullName = firstName + " " + lastName;
  // 'n' in lastName needs to be capitalized for var fullName, needs a ' ' or space between first and lastName

  console.log(fullName); // Julia Roberts

  var yearBorn = 1975;
  var currentYear = 2016;
  var age = currentYear - yearBorn;
  // var for var age needs to be lower case

  console.log(age); // 41
