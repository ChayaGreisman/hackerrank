function staircase(n) {
    let count = 1;
    while(count<=n){
        console.log(' '.repeat(n-count)+ '#'.repeat(count))
        count++
    }
}