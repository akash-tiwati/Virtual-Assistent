let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <18){
        speak("Good afternoon Sir")
    }
    else if(hours>=18 && hours <21){
        speak("Good evening Sir")
    }else{
        speak("Good night Sir")
    }
}
window.addEventListener('load',()=>{
    wishMe();
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition =new speechRecognition();
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    voice.style.display="block"
    btn.style.display="none"
})
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("hu r u")||message.includes("who are you")){
        speak("i am virtual assistant ,created by Akash Tiwari")
    }
    else if(message.includes("shipra tum kya kar sakti ho")||message.includes("shifra tum kya kar sakti ho")){
        speak("aap humse kuch bhi poonch sakte hai")
    }
    else if(message.includes("aakash tiwari kaun hai")||message.includes("akash tiwari kaun hai")){
        speak("Akash Tiwari gonda jile ke nibiha paraspur ke gaanw ka ak ladhka hai jo BCA kar raha hai ")
    }
    else if(message.includes("aakash tiwari kaisa student hai")){
        speak("Akash Tiwari ak good student hai wah web developer banne ke sath sath poori duniya par raaj karna chahta hai ")
    }
    else if(message.includes("what is father name of akash tiwari")||message.includes("what is father name of aakash tiwari")){
        speak("mistar ram sanehi tiwari")
    }
    else if(message.includes("what is mother name of akash tiwari")||message.includes("what is mother name of aakash tiwari")){
        speak("mistars shiv kanti devi")
    }
    else if(message.includes("shiv kanti devi akash tiwari ki kaun hai")||message.includes("shiv kanti devi aakash tiwari ki kaun hai")){
        speak("wah akash tiwari ki mother hain")
    }else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("shipra","") || message.replace("shifra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
    }
}