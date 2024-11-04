btn.onclick = function (){
    const name = "susanna"
    let result = ""
    for (let i=name.length-1; i>=0; i--){
        result += name[i]
    }
    document.write("<h2>"+result+"</h2>")
}

