try {
    let result = 10 / 0;
    console.log(result); // fine
    throw new Error("someting went wrong"); // error
}
catch (error) {
    console.log(`caught the error :`, error.message);
}
finally {
    //code that will always run
    console.log('this will always excute');
}
export {};
