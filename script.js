//responsive crousel image
function init() {
    let query = window.matchMedia("(max-width:641px)");
    if (query.matches) {
        let a = document.getElementById('slider1')
        a.src = "images/cimgr1.webp"
        let b = document.getElementById('slider2')
        b.src = "images/hello2.webp"
        let c = document.getElementById('slider3')
        c.src = "images/cimg8.webp"

    }
    else {
        document.getElementById('slider1').src = "images/cimg6.jpg"
        document.getElementById('slider2').src = "images/cimg5.jpg"
        document.getElementById('slider3').src = "images/cimg7.webp"
    }
}
setInterval(() => {
    init()
}, 1000)

// for hover effect on nav-bar
let phonen = document.querySelector('#phone-nav')

phonen.addEventListener("mouseover", () => {
    let a = document.getElementById('phone')
    a.style = "visibility:visible;height:10vw"
})
phonen.addEventListener("mouseleave", () => {
    let a = document.getElementById('phone')
    a.style = "visibility:hidden;height:0"
}
)

let phone = document.querySelector('#phone')
phone.addEventListener("mouseover", () => {
    let a = document.getElementById('phone')
    a.style = "visibility:visible;height:10vw"
})
phone.addEventListener("mouseleave", () => {
    let a = document.getElementById('phone')
    a.style = "visibility:hidden;height:0vw"
})

//for tv
let tvn = document.querySelector('#tv-nav')

tvn.addEventListener("mouseover", () => {
    let a = document.getElementById('tv')
    a.style = "height:17vw"
    let b=document.querySelectorAll('.seek')
    b.forEach((element)=>{
        element.style="visibility:visible"
    })
})
tvn.addEventListener("mouseleave", () => {
    let a = document.getElementById('tv')
    a.style = "height:0"
    let b=document.querySelectorAll('.seek')
    b.forEach((element)=>{
        element.style="visibility:hidden"
    })
}
)

let tv = document.querySelector('#tv')
tv.addEventListener("mouseover", () => {
    let a = document.getElementById('tv')
    a.style = "height:17vw"
    let b=document.querySelectorAll('.seek')
    b.forEach((element)=>{
        element.style="visibility:visible"
    })
   
})
tv.addEventListener("mouseleave", () => {
    let a = document.getElementById('tv')
    a.style = "height:0"
    let b=document.querySelectorAll('.seek')
    b.forEach((element)=>{
        element.style="visibility:hidden"
    })
})
//for laptop
let laptopn = document.querySelector('#laptop-nav')

laptopn.addEventListener("mouseover", () => {
    let a = document.getElementById('tv')
    a.style = "height:17vw"
    let b=document.querySelectorAll('.seek')
    b.forEach((element)=>{
        element.style="visibility:visible"
    })
})
laptopn.addEventListener("mouseleave", () => {
    let a = document.getElementById('tv')
    a.style = "height:0"
    let b=document.querySelectorAll('.seek')
    b.forEach((element)=>{
        element.style="visibility:hidden"
    })
}
)
let lifen = document.querySelector('#life-nav')

lifen.addEventListener("mouseover", () => {
    let a = document.getElementById('tv')
    a.style = "height:17vw"
    let b=document.querySelectorAll('.seek')
    b.forEach((element)=>{
        element.style="visibility:visible"
    })
})
lifen.addEventListener("mouseleave", () => {
    let a = document.getElementById('tv')
    a.style = "height:0"
    let b=document.querySelectorAll('.seek')
    b.forEach((element)=>{
        element.style="visibility:hidden"
    })
}
)
// for responsive offer banners 
function offer() {
  
    let query = window.matchMedia("(max-width:641px)");
    if (query.matches) {
         document.getElementById('offer1').src = "images/offer1r.webp"
         document.getElementById('offer2').src = "images/offer2r.webp"
         document.getElementById('offer3').src = "images/offer3r.webp"
         document.getElementById('offer4').src = "images/offer4r.webp"
         document.getElementById('offer5').src = "images/offer5r.webp"
         document.getElementById('offer6').src = "images/offer6r.webp"
         document.getElementById('offer7').src = "images/offer7r.webp"
         document.getElementById('offer8').src = "images/offer8r.gif"
         document.getElementById('offer9').src = "images/offer9r.webp"   

     }
    else {
        document.getElementById('offer1').src = "images/offer1.webp"
        document.getElementById('offer2').src = "images/offer2.webp"
        document.getElementById('offer3').src = "images/offer3.webp"
        document.getElementById('offer4').src = "images/offer4.webp"
        document.getElementById('offer5').src = "images/offer5.webp"
        document.getElementById('offer6').src = "images/offer6.webp"
        document.getElementById('offer7').src = "images/offer7.webp"
        document.getElementById('offer8').src = "images/offer8.gif"
        document.getElementById('offer9').src = "images/offer9.webp"
       
       
    }
}
setInterval(() => {
    offer()
}, 1000)