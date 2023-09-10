/**
 * Random utilities Functions
 * @author Hammad Qureshi
 */

/**
 * Return value from array at random index.
 */
const getRandomValueOfArray = (arr) => {
    if(!Array.isArray(arr)) throw new Error("Input is not an array");
    if(arr.length == 0) throw new Error("Input is empty array");
    let random_index = Math.floor(Math.random() * (arr.length));

    return arr[random_index];
}

/**
 * Random Work: Some random work to simulate/mock that server is doing something
 */
const doRandomWork = () =>{
    const random_time = getRandomValueOfArray([400, 600, 800, 1200, 1500]);
    return new Promise((resolve, reject) => setTimeout(()=>resolve(`Random work completed in ${random_time} ms`), random_time))
}

exports.randomWork = doRandomWork;