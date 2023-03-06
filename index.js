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
// console.log(options)Number

 














calculate.addEventListener("click", (e) => {
    e.preventDefault()
    if (principalamt.value !== "" && interest.value !== "" && timelimit.value !== "" && options.value == "years") {
        // if(options.value == "years"){
            let yearConventor = (timelimit.value)*12
        // console.log(yearConventor);
        let rateOfInt = interest.value / 1200
        // console.log(rateOfInt)

        let Numarator = (principalamt.value) * rateOfInt * (1 + rateOfInt) ** (yearConventor)
        // console.log(Numarator)

        let Demnaminator = (1 + rateOfInt) ** (yearConventor) - 1
        // console.log(Demnaminator)

        let result =Number(Numarator / Demnaminator)
        answer.innerText = Math.round(result).toLocaleString()
        // console.log(result)
        
        let output = result * yearConventor - principalamt.value
    //    console.log()
        answer1.innerText = Math.round(output).toLocaleString()

        let output2 =   Number(principalamt.value)+Number(output)
        answer2.innerText = Math.round(output2).toLocaleString()


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
     
        // const createli2 = document.createElement("li")
        // createli2.innerText = output
        // createli2.style.listStyle = "none"
        // answer2.append(createli2)
        // timelimit.value = ""
        // }
       
      
    }
    else if(principalamt.value !== "" && interest.value !== "" && timelimit.value !== "" && options.value == "months"){
        let rateOfInt = Number(interest.value / 1200)
        // console.log(rateOfInt)

        let Numarator = (Number(principalamt.value) * rateOfInt) * (Number(1 + rateOfInt)) ** (Number(timelimit.value))
        // console.log(Numarator)

        let Demnaminator = (Number(1 + rateOfInt) ** (Number(timelimit.value)) - 1)
        // console.log(Demnaminator)

        let result = Math.round(Numarator / Demnaminator)
        // console.log(result)
        let result1 = Number(Numarator/Demnaminator)
        
        let output = Math.round(result1 * (Number(timelimit.value)))

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