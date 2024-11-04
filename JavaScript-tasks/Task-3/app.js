const hackers = [
    { name: 'susanna', age: 18 },
    { name: 'akbar', age: 24 },
    { name: 'tima', age: 20 },
    { name: 'susanna', age: 18 },
];
const grouped = {};
hackers.forEach(s => {
    if (!grouped[s.age]) {
        // Ключ с возрастом отсутствует
        grouped[s.age] = [s];
    } else {
        grouped[s.age].push(s);
    }
    const res1 = JSON.stringify(grouped)
    document.getElementById("result").innerHTML="<h3>" + res1 + "</h3>"
});
