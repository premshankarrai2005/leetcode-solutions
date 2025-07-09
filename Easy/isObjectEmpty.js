// Problem No:-2727. Is Object Empty

function isObjectEmpty(obj){
    if(Object.keys(obj).length==0){
        console.log("True");
    }else{
        console.log("False");
    }
    
}
const arr1 = {"x": 5, "y": 42}
const arr2 = {}
const arr3 = [null, false, 0]
isObjectEmpty(arr1); //False
isObjectEmpty(arr2); //True
isObjectEmpty(arr3); //False
