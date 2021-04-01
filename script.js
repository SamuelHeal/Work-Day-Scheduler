
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


var textCapture = [{
    class: ".first",
    id: "9",
},
{
    class: ".second",
    id: "10",
},
{
    class: ".third",
    id: "11",
},
{
    class: ".fourth",
    id: "12",
},
{
    class: ".fifth",
    id: "13",
},
{
    class: ".sixth",
    id: "14",
},
{
    class: ".seventh",
    id: "15",
},
{
    class: ".eigth",
    id: "16",
},
{
    class: ".ninth",
    id: "17",
}]

textCapture.forEach(function(item, i){
    $(item.class).on("click", function(){
        var text = document.getElementById(item.id).value
        storage[i].text = text
        storeData()
    })
})

function storeData(){
    localStorage.setItem("inputText", JSON.stringify(storage))
}


window.onload = function init(){
    colorChanging()
    var storedData = JSON.parse(localStorage.getItem("inputText"));
    if (storedData != null){
        storage = storedData
    }
    
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

    console.log(storage)
}

// Code to control the color changes

var colorChange = [
{
    id: "#9",
    time: 9
},
{
    id: "#10",
    time: 10
},
{
    id: "#11",
    time: 11
},
{
    id: "#12",
    time: 12
},
{
    id: "#13",
    time: 13
},
{
    id: "#14",
    time: 14
},
{
    id: "#15",
    time: 15
},
{
    id: "#16",
    time: 16
},
{
    id: "#17",
    time: 17
}]

function colorChanging(){
    colorChange.forEach(function(item, i){
        var currentTime = moment().hour()
        if (item.time === currentTime){
            $(item.id).addClass("red")
        }
        if (item.time < currentTime){
            $(item.id).addClass("grey")
        }
        if (item.time > currentTime){
            $(item.id).addClass("green")
        }
    })
}

