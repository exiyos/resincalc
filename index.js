var moracon = document.querySelector("#moracontainer");
var herocon = document.querySelector("#herocontainer");
var wl4 = document.querySelector("#wl4")
var input = document.querySelector("#input")
var wl5 = document.querySelector("#wl5")
var wl6 = document.querySelector("#wl6")
var calculate = document.querySelector("#calculate")
var close = document.querySelector(".close")
var close1 = document.querySelector(".close1")
var popup = document.querySelector(".morapopup")
var heropopup = document.querySelector(".heropopup")
var blur = document.querySelector("#blur")
var blurry = document.querySelector(".blurry")
var originalnumber = document.querySelector(".originalnumber")
var herooriginalnumber = document.querySelector(".herooriginalnumber")
var herofragilenumber = document.querySelector(".herofragilenumber")
var fragilenumber = document.querySelector(".fragilenumber")
var moratotal = document.querySelector("#totalmora")
var herototal = document.querySelector("#totalhero")
var advtotal = document.querySelector("#totaladv")
var wl = '';
var mora = 0
var totalmoravalue = 0
var val
var hero = ''
var selected = ''
var minhero;
var minadv = 6
var maxadv = 7
var maxhero;
var minresin
var maxresin

moracon.addEventListener("click", function(){

    moracon.classList.add("active")
    moracon.classList.remove("inactive")
    herocon.classList.add("inactive")
    herocon.classList.remove("active")

    selected = "mora"
    console.log(selected)
})



herocon.addEventListener("click", function(){

    herocon.classList.add("active")
    herocon.classList.remove("inactive")
    moracon.classList.add("inactive")
    moracon.classList.remove("active")

    selected = 'hero'
})

wl4.addEventListener("click", function(){

    wl4.classList.add("active")
    wl4.classList.remove("inactive")
    wl5.classList.add("inactive")
    wl5.classList.remove("active")
    wl6.classList.add("inactive")
    wl6.classList.remove("active")

    wl = "4"
    mora = 44000
    minhero = 2
    maxhero = 3
})
wl5.addEventListener("click", function(){

    wl5.classList.add("active")
    wl5.classList.remove("inactive")
    wl4.classList.add("inactive")
    wl4.classList.remove("active")
    wl6.classList.add("inactive")
    wl6.classList.remove("active")

    wl = "5"
    mora = 52000
    minhero = 3
    maxhero = 4
})

wl6.addEventListener("click", function(){

    wl6.classList.add("active")
    wl6.classList.remove("inactive")
    wl5.classList.add("inactive")
    wl5.classList.remove("active")
    wl4.classList.add("inactive")
    wl4.classList.remove("active")

    wl = "6"
     mora = 60000
     minhero = 4
     maxhero = 5

})



close.addEventListener("click", function(){
    heropopup.style.display = 'none'
popup.style.display = 'none'
heropopup.style.display = 'none'
blur.style.display = 'none'
blurry.style.filter = ("blur(0px)")
})



close1.addEventListener("click", function(){
    heropopup.style.display = 'none'
popup.style.display = 'none'
heropopup.style.display = 'none'
blur.style.display = 'none'
blurry.style.filter = ("blur(0px)")
})

calculate.addEventListener("click", function(){


    if (selected == 'mora'){


        if(wl == ''){
            alert("Choose a world level")
        }else{
            if(isInt(input.value)){
                popup.style.display = 'block'
                popup.style.animation = "fadein 1s ";
                blur.style.display = 'block'
                blur.style.animation = "blurfadein 1s ";
                blurry.style.filter = ("blur(5px)")
                totalmoravalue = round60(input.value)
                originalnumber.innerHTML = round60(input.value)/mora*20
                val = round60(input.value)/mora*20
                fragilenumber.innerHTML = (val/60).toFixed(1)
                moratotal.innerHTML = totalmoravalue + " Mora"
            }

    
         }

        
    }else if(selected == 'hero'){

        if(wl == ''){
            alert("Choose a world level")
        }else{
            if(isInt(input.value)){

                heropopup.style.display = 'block'
                heropopup.style.animation = "fadein 1s ";
                blur.style.display = 'block'
                blur.style.animation = "blurfadein 1s ";
                blurry.style.filter = ("blur(5px)")
                minresin = round4(input.value)/minhero*20
                maxresin = round5(input.value)/maxhero*20
                herooriginalnumber.innerHTML = round4(input.value)/minhero*20 + "-" + round5(input.value)/maxhero*20
                herototal.innerHTML = round4(input.value) + "-" + round5(input.value) + " Hero's Witt"
                herofragilenumber.innerHTML =((round4(input.value)/minhero*20)/60).toFixed(1) + "-" + ((round5(input.value)/maxhero*20)/60).toFixed(1)
            
                advtotal.innerHTML = minresin/20 * minadv + "-" + maxresin/20 * maxadv + " <span class='mrgnleft'>Adventurer's</span> Experience"
        
            }
    
    }
    }else{
        alert("Please select a resource")
    }

  
    
    })


    function round20(x)
{
    return Math.ceil(x/20)*20;
}

function round60(x)
{
    return Math.ceil(x/mora)*mora;
}

function round4(x)
{
    return Math.ceil(x/minhero)*minhero;
}

function round5(x)
{
    return Math.ceil(x/maxhero)*maxhero;
}

function round6(x)
{
    return Math.ceil(x/minadv)*minadv;
}

function round7(x)
{
    return Math.ceil(x/maxadv)*maxadv;
}



function isInt(value) {
    var x;
    return isNaN(value) ? !1 : (x = parseFloat(value), (0 | x) === x);
  }