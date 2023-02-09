function selectPhoneOrEmail(e){
    console.log(typeof(e.id))
    if (e.id=="d1"){
        let ref= document.getElementById("inputemail")
        ref.value=" "
        ref.type="Email"
        console.log(ref)
    }
    else {
        let ref= document.getElementById("inputemail")
        console.log(ref.value)
        ref.type="text"
         console.log(ref)
         ref.value=" "
        

    }
    

}
var i=0

function carosoalInc(){
    console.log()
    
   var ref= document.getElementsByClassName("img")
   var arr=["M-v1.PNG","M-v2.PNG","M-v3.PNG","M-v4.PNG","M-v5.PNG","M-v6.PNG","M-v7.PNG"] 

   console.log(ref)
   i++
   if (i>=arr.length){
    i=0
   }
   else{
    i++
   }

   console.log(ref[i])
   ref[0].style.backgroundImage=arr[i]
   ref[1].style.backgroundImage=arr[i+1]
   ref[2].style.backgroundImage=arr[i+2]
   ref[3].style.backgroundImage=arr[i+3]
   ref[4].style.backgroundImage=arr[i+4]
   ref[5].style.backgroundImage=arr[i+5]
   console.log(ref[0])
   console.log(ref[i])
   
}


function carosoaldec(){
    console.log()
    
   var ref= document.getElementsByClassName("img")
   var arr=["M-v1.PNG","M-v2.PNG","M-v3.PNG","M-v4.PNG","M-v5.PNG","M-v6.PNG","M-v7.PNG"] 

   console.log(ref)
   i--
   if (i<0){
    i=arr.length-1
   }
   else{
    i--
   }

   console.log(i)
   ref[0].style.backgroundImage="url(arr[i])"
   ref[1].style.backgroundImage="url(M-v2.PNG)"
   ref[2].style.backgroundImage='url(M-v3.PNG)'
   ref[3].style.backgroundImage="url(M-v4.PNG)"
   ref[4].style.backgroundImage="url(M-v5.PNG)"
   ref[5].style.backgroundImage="url(M-v6.PNG)"


  
   console.log(ref[0])
}