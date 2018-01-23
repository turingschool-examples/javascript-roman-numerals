# JavaScript Roman Numerals

## Overview

<<<<<<< HEAD
In this challenge, we're going to write a function that converts an integer to its Roman numeral equivalent. If we give our method the Arabic number 476, our function will return the Roman Numeral CDLXXVI.
=======
In this challenge, we're going to write a function that converts an integer to its Roman numeral equivalent. IIf we give our method the Arabic number 476, our function will return the Roman Numeral CDLXXVI.
>>>>>>> 256772be45102e573ba5679627cee2dd4f36f819

### Roman Numerals as Representation
Has anyone ever seen a 5? Not a symbol we write on a piece of paper or print to a screen, but an actual, honest-to-goodness 5?  Of course not. You've seen things that somehow embody five: five apples, five fingers, five weekdays on the calendar, a scrap of paper with *5* written on it, and so forth.

Think of all the ways to represent the integer 5.  Symbols like *5*, *five*, *V*, and *IIIII* are all ways to represent 5. If we asked a three-year-old, they might hold up the five fingers on their hand or pull out five pennies from their pocket. Computers encode numbers their own way, as a sequence of 0s and 1s called [binary](http://en.wikipedia.org/wiki/Binary_number).  [The map is not the territory](http://en.wikipedia.org/wiki/Map%E2%80%93territory_relation), as they say.

## Part One: Old Roman Numerals

| Arabic Number  | Roman Numeral |
| -------------- | ------------- |
| 1              | I             |
| 5              | V             |
| 10             | X             |
| 50             | L             |
| 100            | C             |
| 500            | D             |
| 1000           | M             |

*Table 1*. Arabic number and their old Roman numeral equivalents.

In the early days of Roman numerals, the Romans built their numerals from the individual characters in Table 1 (e.g., I, V, X, etc.) written largest value to smallest from left to right.  To determine the value of any numeral, they used straight addition.  I is equivalent to 1.  II is equivalent to 1 + 1, or 2.  VIIII is equivalent to 5 + 1 + 1 + 1 + 1, or 9.

We are going to begin writing a function `convertToOldRoman`.  When passed an integer between 1 and 3000, this function will return a string containing the proper old Roman Numeral.  In other words, `convertToOldRoman(4)` should return the string `'IIII'`.  Don't worry about checking whether or not the number passed to the method is between 1 and 3000.

Be sure to test that your function works properly by writing tests.

*Hint*: It might be useful to use the integer division `/` and modulus `%` methods.

## Part Two: Modern Roman Numerals

| Arabic Number | Roman Numeral |
| ------------- | ------------- |
| 4             | IV            |
| 9             | IX            |
| 14            | XIV           |
| 44            | XLIV          |
| 99            | XCIX          |
| 400           | CD            |
| 944           | CMXLIV        |

*Table 2*.  Modern Roman numeral examples.

Eventually, the Romans changed systems.  Now, putting a smaller numeral before a larger one meant you had to subtract the smaller one.  So, instead of 4 being represented by 1 + 1 + 1 + 1, it was now 5 - 1, or IV.  4 was not the only value affected (see Table 2 for more examples).

We're going to write a second method so that will return modern Roman Numerals. We'll most likely use some similar logic as in the first function.

```javascript
convertToOldRoman(4)
 => "IIII"
<<<<<<< HEAD

=======
 
>>>>>>> 256772be45102e573ba5679627cee2dd4f36f819
convertToNewRoman(4)
 => "IV"
```

**Don't forget to write tests to ensure your function works properly.**

## Extension
<<<<<<< HEAD
An application you can run via your command line is wonderful, but let's add some functionality for a user to interact with the functions we've created. Someone may need to quickly know how an arabic number corresponds with a roman numeral!
=======
An application you can run via your command line is wonderful, but let's add some functionality for a user to interact with the functions we've created. Someone may need to quickly know how an arabic number corresponds with a roman numeral! 
>>>>>>> 256772be45102e573ba5679627cee2dd4f36f819

We'll add a feature for a user to visit your page and enter a number (arabic number) and receive the corresponding roman numeral after pressing submit. To ensure this (somewhat tiny) application is user friendly, add some styling!

## Finished?

When you think you've completed this challenge, take a few minutes and see if there are places to refactor. Then, when you're confident you have the best solution, create a Pull Request back to this repository with your _fully_ tested solution.
<<<<<<< HEAD
=======


>>>>>>> 256772be45102e573ba5679627cee2dd4f36f819
