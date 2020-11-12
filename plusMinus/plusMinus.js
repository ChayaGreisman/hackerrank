function plusMinus(arr) {
    let length = arr.length;
    let pos = 0;
    let neg = 0;
    let zero = 0;

    for (let i=0; i<arr.length; i++){
        if (arr[i] > 0) pos++
        else if (arr[i] < 0) neg++
        else zero++
    }
    
    console.log((pos/length).toFixed(6))
    console.log((neg/length).toFixed(6))
    console.log((zero/length).toFixed(6))

}
