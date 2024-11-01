btn.onclick = () => {
    const team = [
        {name: "Yulia", position: ["central", "striker"]},
        {name: "Alina", position: ["goalkeeper"]},
        {name: "Ruslana", position: ["midfielder"]},
        {name: "Susanna", position: ["rightForward", "leftForward"]},
        {name: "Milana", position: ["defender"]}
    ]
    const positions = team.reduce((value, curr)=>{
        return [...value, ...curr.position]
    }, [])
    document.write("<h1>"+positions+"</h1>")
}

