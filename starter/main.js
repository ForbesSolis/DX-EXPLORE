

// basic Es5 functon declaration 
// function name (){}

var myname = "Forbes"

function popsomething() {
    alert(myname + " I have been coding since 12")
}


// console.log(document)

var ourbody = document.querySelector(".pagebody")

// ourbody.style.background = "black"


var hamburger = document.querySelector(".hamburger-menu")

// console.log(hamburger)

var mobilelinkscontainer = document.querySelector('.mobile__link-holder')




function addandremove(){
    hamburger.classList.toggle("showhamburger")
    mobilelinkscontainer.classList.toggle('showmobilelinks')
}
