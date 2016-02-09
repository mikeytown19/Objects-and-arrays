//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

  //Code here

var me = {
  name: "Mike",
  age:"23",
};
//alert(me.name);


//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  //Code here

var favoriteThings = {
  band: "coldplay",
  food:"popcorn",
  person:"John Mayer",
  book: "green egs and ham",
  movie: "Perks of being a Wallflower",
  holiday: "Christmas",
}

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = "honday civic";
favoriteThings.brand = "volcom";



//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

  //Code here

favoriteThings.food = "Lettuce";
favoriteThings.book = "50 Shades of Gray";


//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

  var backPack = {};
  var item = "firstPocket";
  backPack[item] = "chapstick";

//After you do the above, alert your entire backPack object.

  console.log(backPack);

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

  //Code here




//NEXT PROBLEM




//Create an 'alsoMe' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

  var alsoMe = {
    name: "Mike",
    age: 23,
    height: "5 11",
    gender: "Male",
    married: "No",
    eyeColor: "brown",
    hairColor: "brown"

  }

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

  //Code Here

for (var p in alsoMe){
  //alert(alsoMe[p]);
};


//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

  var album = {
    love: 4,
    hate: 5,
    friends: 3,
    call:4,
    home:3,

  }
//Now, loop through your album object alerting every song title individually.

for (var key in album){
  //alert('key');
}





//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).


  var states = {
    utah:4400,
    california:1000000,
    nevada:30000,
    oregon: 80000,
    washington:100,
  }
  //Code Here

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

  for (var p in states){
    if (states[p] > 30000){
      alert(states[p]);
    }

  }




//NEXT PROBLEM




var user1 = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

 for (var p in user1){
   if (user1[p]){

   }else{
     delete user1[p];

   }
 }

//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Code Here

user1.name = "Mike";
user1.username = "Mikeytown";



//NEXT PROBLEM




var user2 = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.
user2.name = "Tyler S. McGinnis";
 user2.email = "tyler.mcginnis@devmounta.in";


//Now call the sayName method that's on the user object which will alert the users email
user2.sayName();
  //Code Here




//NEXT PROBLEM




//Create an empty object called methodCollection.

  var methodCollection = {


  };

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

methodCollection.alertHello = function(){
  alert("hello");
};
methodCollection.logHello = function(){
  console.log("hello");
};




//Now call your alertHello and logHello methods.

  //Code Here
methodCollection.alertHello();
methodCollection.logHello();

//NEXT PROBLEM



// Create a function called MakePerson which takes in name, birthday, ssn as its parameters and returns a new object with all of the information that you passed in.

function MakePerson(name, birthday, ssn) {
 var schtuff = new Object();
 schtuff.name = name;
 schtuff.birthday = birthday;
 schtuff.ssn = ssn;

 return schtuff;

}


//NEXT PROBLEM



// Create a function called MakeCard which takes in all the data it needs to make a Credit Card object and returns that object so that whenever you invoke MakeCard, you get a brand new credit card.

function MakeCard() {
 var master = {
   name: '',
   expDate: '',
   cardNumber: ''

 };
 return master;
}


function bindCard(MakePerson, MakeCard) {
 var newCustomer ={

 }
 return newCustomer;
}


//NEXT PROBLEM



/* As of this point you should have a MakePerson and a MakeCard function which returns you either a person or a credit card object.
   Now, create a bindCard function that takes in a person object as its first parameter and a creditcard object as its second parameter.
   Have bindCard merge the two parameters together into a new object which contains all the properties from the person as well as the creditcard.
*/

  //Code Here
