function fizzBuzzMath() {
    //declare variables
    let i = 0;
    let newFizzBuzz = "";
    
    //check for FizzBuzz from 1 to 100
    for (i = 0; i < 100; i++) {
        let n = i+1;
        // turn joint multiples of 3 and 5 into FizzBuzz
        if (n % 3 == 0 && n % 5 == 0) {
            newFizzBuzz += "<span class='fizzBuzz'> FizzBuzz</span><br> ";
        }
        // turn multiples of 3 into "Fizz"
        else if (n % 3 == 0) {
            newFizzBuzz += "<span class='fizz'>Fizz</span> <br>";
        }
        // turn multiples of 5 into "Buzz"
        else if (n % 5 == 0) {
            newFizzBuzz += "<span class='buzz'>Buzz</span> <br>";
        }
        // print remaining numbers as normal numbers
        else {
            newFizzBuzz += n + "<br>";
        }
    }
    
    //send results to html output
    //document.querySelector().inner
    //ISSUE
    document.getElementById("fizzBuzzResults").innerHTML = newFizzBuzz;
}