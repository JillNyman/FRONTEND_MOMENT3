import Chart from 'chart.js/auto'

window.onload = init;

function init(){
processDataBar();
processDataCircle();
}

// En asynkron funktion som simulerar hämtning av data från en API
async function fetchData() {
try {

const response = await fetch('https://studenter.miun.se/~mallar/dt211g/');
const data = await response.json();
return data;

} catch (error) {
console.error('Fetch error:', error);
throw error;
}
}

//STAPELDIAGRAM
async function processDataBar(){
    try{
const dataResults =  await fetchData();

let courseArray = [];
dataResults.forEach(course => {
    if(course.type === 'Kurs'){
        courseArray.push(course); //VISAR ALLA VALUES FRÅN TYPE=KURS(315 ST)
    }
    //NY ARRAY MED BARA KURSER(FUNKAR)
    return courseArray
    //KURSERNA BEHÖVER SORTERAS(FUNKAR)
    .sort((a, b) => b.applicantsTotal - a.applicantsTotal)
    .splice(6);
})
//console.log(courseArray); 

const ctx = document.getElementById('myChart'); 
const substring = courseArray[0].name.substr(0, 32) + "...";

new Chart(ctx, {
    type: 'bar',
    
    data: {
        labels: [substring, courseArray[1].name, courseArray[2].name, courseArray[3].name, courseArray[4].name, courseArray[5].name],
       
        datasets: [{
            label: '# of applicants',
            data: [courseArray[0].applicantsTotal, courseArray[1].applicantsTotal, courseArray[2].applicantsTotal, courseArray[3].applicantsTotal, courseArray[4].applicantsTotal, courseArray[5].applicantsTotal],
            borderWidth: 1
        }]
    },  
    options: {
        backgroundColor: ["#ffb7c5"], 
    }
     
});

} catch(error) {
    console.error('Fetch error:', error);

throw error;
}
}


//CIRKELDIAGRAM
async function processDataCircle(){
    try{
const dataResults =  await fetchData();

let courseArray = [];
dataResults.forEach(course => {
    if(course.type === 'Program'){
        courseArray.push(course); 
    }
    //NY ARRAY MED BARA PROGRAM(FUNKAR)
    return courseArray
    //PROGRAMMEN BEHÖVER SORTERAS(FUNKAR)
    .sort((a, b) => b.applicantsTotal - a.applicantsTotal)
    .splice(5);
})
//console.log(courseArray); 

const ctx = document.getElementById('myChart2'); 
new Chart(ctx, {
    type: 'pie',
    data: {
        
        labels: [courseArray[0].name, courseArray[1].name, courseArray[2].name, courseArray[3].name, courseArray[4].name],
        labelWrap: true,
        labelMaxWidth: 20,
        datasets: [{
            label: '# of applicants',
            data: [courseArray[0].applicantsTotal, courseArray[1].applicantsTotal, courseArray[2].applicantsTotal, courseArray[3].applicantsTotal, courseArray[4].applicantsTotal],
            borderWidth: 1
        }]
    },  
    options: {
        backgroundColor: ["#ffb7c5", "#d8c690", "#21827e", "#649e8c", "#ff849c"]
    }
});

} catch(error) {
    console.error('Fetch error:', error);

throw error;
}
}
