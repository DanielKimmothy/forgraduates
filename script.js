let one
let two
let three
let four
let five
let six
let seven
let eight
let nine
let ten



document.getElementById("submit").onclick = function(){
    one = document.getElementById("adjective1").value
    two = document.getElementById("adjective2").value
    three = document.getElementById("adjective3").value
    four = document.getElementById("adjective4").value

    five = document.getElementById("input5").value
    six = document.getElementById("input6").value
    seven = document.getElementById("input7").value
    eight = document.getElementById("input8").value
    nine = document.getElementById("input9").value
    ten = document.getElementById("input10").value

    document.getElementById("result").innerHTML = "I had a " + one + " year this year. I made " + two + " decisions. I think i was a " + four + " person because " + five + ". I think cycle tests are " + three + " . My favourite part of this year was probably " + six + " because I was able to " + seven + " as much as i can. Im " + eight + " because I had this year. And a special thanks to " + nine + ", my year wouldn't be possible without all your " +  ten + ". "
    console.log(one + two + three + four + five + six + seven + eight + nine + ten)
}
/*
document.getElementById("submit").onclick = function(){
    let first = Math.floor(Math.random() * 4) + 1
    console.log(first)
    if (first == 1){
        let one = document.getElementById("adjective1").value
        console.log(one)
    }
    else if (first == 2){
        let one = document.getElementById("adjective2").value
        console.log(one)
    }
    else if (first == 3){
        let one = document.getElementById("adjective3").value
        console.log(one)
    }    
    else if (first == 4){
        let one = document.getElementById("adjective4").value
        console.log(one)
    }

// FYI there probably is a better and simpler way to do this
//however, i dont know so i gotta work with what i know for now.
    let second = Math.floor(Math.random() * 4) + 1
    console.log(second)
    //if adjective 1 is alr chosen

    if (second == 1){
        let two = document.getElementById("adjective1").value
        console.log(two)
    }
    else if (second == 2){
        let two = document.getElementById("adjective2").value
        console.log(two)
    }
    else if (second == 3){
        let two = document.getElementById("adjective3").value
        console.log(two)
    }    
    else if (second == 4){
        let two = document.getElementById("adjective4").value
        console.log(two)
    }

    /* they dont work, but I'll get 'em to work at some point

        the problem lies in the first if statement, where i go
        "if (one == document.getElementById("adjectiveX").value)"
        is it the one? Yes it is, this if statement dont know the variable "one" because
        its in the if statement

    //if adjective 2 is already chosen

    if (one == document.getElementById("adjective2").value){

        if (second == 2){
                let two = document.getElementById("adjective1").value
                console.log(two)
            }
        else if (second == 3){
            let two = document.getElementById("adjective3").value
            console.log(two)
        }    
        else if (second == 4){
            let two = document.getElementById("adjective4").value
            console.log(two)
        }
        else if (second == 1){
            console.log("code is not working")
        }
        
    }

    //if adjective 3 is already chosen
    if (one == document.getElementById("adjective3").value){

        if (second == 2){
                let two = document.getElementById("adjective1").value
                console.log(two)
            }
        else if (second == 3){
            let two = document.getElementById("adjective2").value
            console.log(two)
        }    
        else if (second == 4){
            let two = document.getElementById("adjective4").value
            console.log(two)
        }
        else if (second == 1){
            console.log("code is not working")
        }
        
    }

    //if adjective 4 is already chosen.
    if (one == document.getElementById("adjective4").value){

        if (second == 2){
                let two = document.getElementById("adjective1").value
                console.log(two)
            }
        else if (second == 3){
            let two = document.getElementById("adjective2").value
            console.log(two)
        }    
        else if (second == 4){
            let two = document.getElementById("adjective3").value
            console.log(two)
        }
        else if (second == 1){
            console.log("code is not working")
        }

        
    }
    console.log("submitted")
    
    third = Math.floor(Math.random() * 4) + 1
    console.log(third)
    if (third == 2){
        let three = document.getElementById("adjective2").value
        console.log(three)
    }
    else if (third == 3){
        let three = document.getElementById("adjective3").value
        console.log(three)
    }    
    else if (third == 4){
        let three = document.getElementById("adjective4").value
        console.log(three)
    }
    else if (third == 1){
        let three = document.getElementById("adjective1").value
        console.log(three)
    }

    fourth = Math.floor(Math.random() * 4) + 1
    console.log(fourth)
    if (fourth == 2){
        const four = document.getElementById("adjective2").value
        console.log(four)
    }
    else if (fourth == 3){
        let four = document.getElementById("adjective3").value
        console.log(four)
    }    
    else if (fourth == 4){
        let four = document.getElementById("adjective4").value
        console.log(four)
    }
    else if (fourth == 1){
        let four = document.getElementById("adjective1").value
        console.log(four)
    }


    console.log(one)
    console.log(two)
    console.log("_______")
}
*/