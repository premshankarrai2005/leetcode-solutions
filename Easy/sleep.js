// Problem No:-2621. Sleep
function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Your Program Completed ");
        }, millis)
    })
}

//call the function
async function main(){
    console.log("Before Sleep");
    const result = await sleep(6000);
    console.log("After sleep");
    console.log(result);
}
main()