init()
storeData()

// Setting the current date and inserting it into the webpage
var currentDate = moment().format("LLLL")
$("#currentDay").text(currentDate)

// Code to handle storing, accessing and setting the schedule
var storage = [
    {
        text: ''
    },
    {
        text: ''
    },
    {
        text: ''
    },
    {
        text: ''
    },
    {
        text: ''
    },
    {
        text: ''
    },
    {
        text: ''
    },
    {
        text: ''
    },
    {
        text: ''
    }
]


$(".first").on("click", function(){
    var nineAMText = document.getElementById("9").value
    storage[0].text = nineAMText    
    storeData()
})

$(".second").on("click", function(){
    var tenAMText = document.getElementById("10").value
    storage[1].text = tenAMText  
    storeData()
})

$(".third").on("click", function(){
    var elevenAMText = document.getElementById("11").value
    storage[2].text = elevenAMText   
    storeData()
})

$(".fourth").on("click", function(){
    var twelvePMText = document.getElementById("12").value
    storage[3].text = twelvePMText
    storeData()
   
})

$(".fifth").on("click", function(){
    var onePMText = document.getElementById("13").value
    storage[4].text = onePMText   
    storeData()
})

$(".sixth").on("click", function(){
    var twoPMText = document.getElementById("14").value
    storage[5].text = twoPMText   
    storeData()
})

$(".seventh").on("click", function(){
    var threePMText = document.getElementById("15").value
    storage[6].text = threePMText
    storeData()
})

$(".eigth").on("click", function(){
    var fourPMText = document.getElementById("16").value
    storage[7].text = fourPMText   
    storeData()
})

$(".ninth").on("click", function(){
    var fivePMText = document.getElementById("17").value
    storage[8].text = fivePMText 
    storeData()
})


function storeData(){
    localStorage.setItem("inputText", JSON.stringify(storage))
}

function init(){
    var storedData = JSON.parse(localStorage.getItem("inputText"));
    storage = storedData
    localStorage.setItem("inputText", JSON.stringify(storage))
    console.log(storedData)
    console.log(storage)
    $("#9").val(storage[0].text)
    $("#10").val(storage[1].text)
    $("#11").val(storage[2].text)
    $("#12").val(storage[3].text)
    $("#13").val(storage[4].text)
    $("#14").val(storage[5].text)
    $("#15").val(storage[6].text)
    $("#16").val(storage[7].text)
    $("#17").val(storage[8].text)
}

// Code to control the color changes

function colorChanging(){
    var currentTime = moment().hour()
    if (currentTime === 9){
        $("#9").addClass("red")
        $("#10").addClass("green")
        $("#11").addClass("green")
        $("#12").addClass("green")
        $("#13").addClass("green")
        $("#14").addClass("green")
        $("#15").addClass("green")
        $("#16").addClass("green")
        $("#17").addClass("green")
        
    }

    else if (currentTime === 10){
        $("#9").addClass("grey")
        $("#10").addClass("red")
        $("#11").addClass("green")
        $("#12").addClass("green")
        $("#13").addClass("green")
        $("#14").addClass("green")
        $("#15").addClass("green")
        $("#16").addClass("green")
        $("#17").addClass("green")

    }

    else if (currentTime === 11){
        $("#9").addClass("grey")
        $("#10").addClass("grey")
        $("#11").addClass("red")
        $("#12").addClass("green")
        $("#13").addClass("green")
        $("#14").addClass("green")
        $("#15").addClass("green")
        $("#16").addClass("green")
        $("#17").addClass("green")

    }

    else if (currentTime === 12){
        $("#9").addClass("grey")
        $("#10").addClass("grey")
        $("#11").addClass("grey")
        $("#12").addClass("red")
        $("#13").addClass("green")
        $("#14").addClass("green")
        $("#15").addClass("green")
        $("#16").addClass("green")
        $("#17").addClass("green")

    }

    else if (currentTime === 13){
        $("#9").addClass("grey")
        $("#10").addClass("grey")
        $("#11").addClass("grey")
        $("#12").addClass("grey")
        $("#13").addClass("red")
        $("#14").addClass("green")
        $("#15").addClass("green")
        $("#16").addClass("green")
        $("#17").addClass("green")

    }

    else if (currentTime === 14){
        $("#9").addClass("grey")
        $("#10").addClass("grey")
        $("#11").addClass("grey")
        $("#12").addClass("grey")
        $("#13").addClass("grey")
        $("#14").addClass("red")
        $("#15").addClass("green")
        $("#16").addClass("green")
        $("#17").addClass("green")

    }

    else if (currentTime === 15){
        $("#9").addClass("grey")
        $("#10").addClass("grey")
        $("#11").addClass("grey")
        $("#12").addClass("grey")
        $("#13").addClass("grey")
        $("#14").addClass("grey")
        $("#15").addClass("red")
        $("#16").addClass("green")
        $("#17").addClass("green")

    }

    else if (currentTime === 16){
        $("#9").addClass("grey")
        $("#10").addClass("grey")
        $("#11").addClass("grey")
        $("#12").addClass("grey")
        $("#13").addClass("grey")
        $("#14").addClass("grey")
        $("#15").addClass("grey")
        $("#16").addClass("red")
        $("#17").addClass("green")

    }

    else if (currentTime === 17){
        $("#9").addClass("grey")
        $("#10").addClass("grey")
        $("#11").addClass("grey")
        $("#12").addClass("grey")
        $("#13").addClass("grey")
        $("#14").addClass("grey")
        $("#15").addClass("grey")
        $("#16").addClass("grey")
        $("#17").addClass("red")

    }

    else if (currentTime > 17){
        $("#9").addClass("grey")
        $("#10").addClass("grey")
        $("#11").addClass("grey")
        $("#12").addClass("grey")
        $("#13").addClass("grey")
        $("#14").addClass("grey")
        $("#15").addClass("grey")
        $("#16").addClass("grey")
        $("#17").addClass("grey")
    }

    else if (currentTime < 9){
        $("#9").addClass("green")
        $("#10").addClass("green")
        $("#11").addClass("green")
        $("#12").addClass("green")
        $("#13").addClass("green")
        $("#14").addClass("green")
        $("#15").addClass("green")
        $("#16").addClass("green")
        $("#17").addClass("green")
    }

}

colorChanging()

