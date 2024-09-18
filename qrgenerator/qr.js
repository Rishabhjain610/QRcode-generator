let imgbox=document.querySelector(".imgbox");
let qrimg=document.querySelector("#qrimg");
let qrtext=document.querySelector("#qrtext");
let qrg=document.querySelector("#qrg");
let hello=document.querySelector("#hello");
qrg.addEventListener("click",()=>{
    if(qrtext.value.length>0){
    qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value;
    hello.classList.add('hi');
    hello.classList.remove('main');
    }
});
