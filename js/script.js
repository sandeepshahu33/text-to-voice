function convert(){
    const a=document.getElementById("text-sec")
    // console.log(a.value);
    const b= new SpeechSynthesisUtterance(a.value)
    b.lang="hi-IN"
    b.rate=.9
    b.pitch=0.9
    speechSynthesis.speak(b)
    
}
function voiceToText(){
    const a=new webkitSpeechRecognition();
    a.continuous=true
    a.lang='hi-IN'
    a.start();
    a.onresult=(b)=>{
        document.getElementById("Voice-text").value=b.results[0][0].transcript
        // console.log(b.results[0][0].transcript)
    }
    console.log(a);
}