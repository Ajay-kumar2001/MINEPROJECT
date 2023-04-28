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
ref=document.getElementsByClassName("FrontViwe")[0]
console.log(ref)
// i=0
// j=arr.length-1
// var arr=["M-f10.PNG","M-v2.PNG","M-f12.PNG","M-v3.PNG","M-v5.PNG","M-v6.PNG","M-f7.PNG"] 


// function carosoalInc(){
//     console.log()
//     var ref= document.getElementsByClassName("img")
//     arr2=[]
//    }


// function carosoaldec(){
//     console.log()
//     var ref= document.getElementsByClassName("img")
// }