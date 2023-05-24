let signin=()=>{
    let a= document.getElementById("sign-up-content")
    let b=document.getElementById("sign-in-content")
    if((a.style.display="none")|| (b.style.display="block")){
      a.style.display="none"
      b.style.display="block"
    }
}
let signup=()=>{
    let a= document.getElementById("sign-up-content")
    let b=document.getElementById("sign-in-content")
    if((a.style.display="block") || (b.style.display="none")){
      a.style.display="block"
      b.style.display="none"
    }
    
   
}