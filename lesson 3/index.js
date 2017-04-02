/**
 * Повесили событие на кнопку
 */
document.querySelector('button').addEventListener('click', function (event) {

    console.log(event);
});

/**
 * Остановка выполнения нативного значения
 */
document.querySelector('a').addEventListener('click', function (event) {

    event.preventDefault();
    console.log('stop');
});

// document.querySelector('#big').addEventListener('click', function (event) {
//
//     console.log('big');
// }, true);

document.querySelector('#big').addEventListener('click', function (event) {

    console.log('big');
});

/**
 * Парамерт меняет вызов событие на погружение а не на всплытие
 * параметр true
 */
// document.querySelector('#small').addEventListener('click', function (event) {
//
//     console.log('small');
// }, true);

document.querySelector('#small').addEventListener('click', function (event) {

    console.log('small');

    /**
     * Остановить дальнейшее распространение события
     */
    event.stopPropagation();
});