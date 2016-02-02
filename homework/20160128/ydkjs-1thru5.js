// chapter 1
// chapter 1
// chapter 1
// LHS, RHS
// console.log( a ); // a is undefined
// a=2;

// function foo(a) {
//     console.log( a ); // 2
// }

// foo( 2 );

// function foo(a) {
//     var b = a;
//     return a + b;
// }

// var c = foo( 2 );

// function foo(a) {
//     console.log( a + b );
// }

// var b = 2;
// foo( 2 ); // 4

// function foo(a) {
//     console.log( a + b );
//     b = a;
// }

// foo( 2 );
// quiz 1
// quiz 1
// quiz 1
function foo(a) { //a = 2 - lhs lookup
    var b = a; //b = a - lhs/value lookup
    return a + b; // rhs = define a+b
}

var c = foo( 2 ); // c = function() - lhs lookup // rhs- 2, define value

// identify all the LHS lookups

// chapter 2
// chapter 2
// chapter 2
// nested scopes
// function foo(a) {

//     var b = a * 2;

//     function bar(c) {
//         console.log( a, b, c );
//     }

//     bar(b * 3);
// }

// foo( 2 ); // 2 4 12

// eval
// function foo(str, a) {
//     eval( str ); // cheating!
//     console.log( a, b );
// }

// var b = 2;

// foo( "var b = 3;", 1 ); // 1, 3

// eval() do not actually modify the enclosing scope.
// function foo(str) {
//    "use strict";
//    eval( str );
//    console.log( a ); // ReferenceError: a is not defined
// }

// foo( "var a = 2" );

// with is typically explained as a short-hand for making multiple property references against an object without repeating the object reference itself each time.
// var obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// // more "tedious" to repeat "obj"
// obj.a = 2;
// obj.b = 3;
// obj.c = 4;

// // "easier" short-hand
// with (obj) {
//     a = 3;
//     b = 4;
//     c = 5;
// }

// However, there's much more going on here than just a convenient short-hand for object property access. Consider:
function foo(obj) {
    with (obj) {
        a = 2;
    }
}

var o1 = {
    a: 3
};

var o2 = {
    b: 3
};

foo( o1 );
console.log( o1.a ); // 2

foo( o2 );
console.log( o2.a ); // undefined
console.log( a ); // 2 -- Oops, leaked global!



































