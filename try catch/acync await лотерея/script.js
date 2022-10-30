async function lottery() {
    console.log("Вы начали игру");
    try {
    let promise = await new Promise(function (resolve, reject) {
        setTimeout(function() {
            Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");  
              }, 1000);
    });
    console.log("Вы выйграли")
    console.log("Вам заплатили")
} catch(err) {
    console.log("Вы проиграли")
} finally {
    console.log("Игра окончена")
}
}

lottery()


/*  function lottery() {
    console.log("Вы начали игру");
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function() {
            Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");  
              }, 1000);
    });
    return promise;
}

lottery()
.then(() => console.log("Вы выйграли"))
.then(() => console.log("Вам заплатили"))
.catch(() => console.log("Вы проиграли"))
.finally(() => console.log("Игра окончена"))   */

