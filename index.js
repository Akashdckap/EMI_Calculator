const principalamt = document.querySelector(".amount")
// console.log(typeof principalamt)
const interest = document.querySelector(".interest")
// console.log(interest)
const timelimit = document.querySelector(".months")
// console.log(timelimit)
const calculate = document.querySelector(".totalpayable")
// console.log(calculate)
const answer = document.querySelector(".month-pay")
// console.log(answer)
const answer1 = document.querySelector(".month-interest")
// console.log(answer1)
const answer2 = document.querySelector(".total-paying")
// console.log(answer2)
const options = document.querySelector(".options")
// console.log(options)
















calculate.addEventListener("click", () => {
    if (principalamt.value !== "" && interest.value !== "" && timelimit.value !== "" && options.value == "years") {
        // if(options.value == "years"){
            let yearConventor = (Number(timelimit.value)*12)
        // console.log(yearConventor);
        let rateOfInt = Number(interest.value / 1200)
        // console.log(rateOfInt)

        let Numarator = (Number(principalamt.value) * rateOfInt) * (Number(1 + rateOfInt)) ** (Number(yearConventor))
        // console.log(Numarator)

        let Demnaminator = (Number(1 + rateOfInt) ** (Number(yearConventor)) - 1)
        // console.log(Demnaminator)

        let result =Math.floor(Numarator / Demnaminator)
        // console.log(result)

        let output = result * (Number(yearConventor))

        let output2 = output - (Number(principalamt.value))

        answer.innerText = result
        // const createli = document.createElement("li")
        // createli.innerText = result
        // createli.style.listStyle = "none"
        // answer.append(createli)
        // principalamt.value = ""

        // const createli1 = document.createElement("li")
        // createli1.innerText = output2
        // createli1.style.listStyle = "none"
        // answer1.append(createli1)
        // interest.value = ""
        answer1.innerText = output2
        // const createli2 = document.createElement("li")
        // createli2.innerText = output
        // createli2.style.listStyle = "none"
        // answer2.append(createli2)
        // timelimit.value = ""
        answer2.innerText = output
        // }
       
      
    }
    else if(principalamt.value !== "" && interest.value !== "" && timelimit.value !== "" && options.value == "months"){
        let rateOfInt = Number(interest.value / 1200)
        // console.log(rateOfInt)

        let Numarator = (Number(principalamt.value) * rateOfInt) * (Number(1 + rateOfInt)) ** (Number(timelimit.value))
        // console.log(Numarator)

        let Demnaminator = (Number(1 + rateOfInt) ** (Number(timelimit.value)) - 1)
        // console.log(Demnaminator)

        let result = Math.floor(Numarator / Demnaminator)
        // console.log(result)

        let output = result * (Number(timelimit.value))

        let output2 = output - (Number(principalamt.value))

        // const createli = document.createElement("li")
        // createli.innerText = result
        // createli.style.listStyle = "none"
        // answer.append(createli)
        // principalamt.value = ""
        answer.innerText = result

        // const createli1 = document.createElement("li")
        // createli1.innerText = output2
        // createli1.style.listStyle = "none"
        // answer1.append(createli1)
        // interest.value = ""
        answer1.innerText = output2

        // const createli2 = document.createElement("li")
        // createli2.innerText = output
        // createli2.style.listStyle = "none"
        // answer2.append(createli2)
        // timelimit.value = ""
        answer2.innerText = output
        
    }
        
    else {
        alert("Please enter value")
    }

})