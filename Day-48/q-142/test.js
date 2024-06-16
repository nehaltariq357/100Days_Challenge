const delay2min = new Promise((resolve) => {
    setTimeout(() => {
        resolve("hello world");
    }, 2000);
});
delay2min.then((hi) => {
    console.log(hi);
});
export {};
