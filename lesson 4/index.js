/**
 * Так будет работать:
 * вызвать функцию до её объявления
 */
myFunc();

function myFunc() {

    console.log('myFunc');
}

/**
 * Так работать не будет
 */
//testFunc();

var testFunc = function () {

    console.log('testFunc');
};

/**
 * А так будет
 */
testFunc();

// typeof null = object
// typeof void(0) = undefined

// [1] + [3] - [2] = 11 (!) WoW