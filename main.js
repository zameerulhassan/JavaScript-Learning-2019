const companies = [
    {name: "Company one", catergory:"Finance", start: 1981, end:2000},
    {name: "Company two", catergory:"Banking", start: 1992, end:2019},
    {name: "Company three", catergory:"IT", start: 1901, end:2012},
    {name: "Company four", catergory:"Construction", start: 1998, end:2020}

];

const age = [23, 11, 21,13,12,11,19,34, 35, 46, 55, 6,7,12];
//for loop
for(let i =0; i<companies.length; ++i){
    //console.log(companies[i]);
    // console.log(companies[i].name);
    //console.log(companies[i].name +':'+companies[i].start);
    console.log(`${companies[i].name} : ${companies[i].start}`);
} 
//foreach
companies.forEach(function(company){
    //this function can take 3 types of params (company, index or companies)
    console.log(company);
});  
//filtering thru for loop
// let canDrink = [];
// for(let i=0; i<age.length; ++i){
//     if(age[i]>21){
//         canDrink.push(age[i]);
//     }
// }
// console.log(canDrink);
//now thru filter
var canDrink =age.filter(function(ageOf){
    if(ageOf>=21){
        return true;
    }
});
console.log(canDrink);
//arrow function
var canDrink2 = age.filter(age2=>age2>=21);
console.log(canDrink2);
// companies who laste more than 10 yeasr.
const lastedTenYears = companies.filter(company=>(company.end-company.start)>20);
console.log(lastedTenYears);

//maps
//create a new array out of company names.
const companiesNames= companies.map(function(company){
    //return company.name;
    return `${company.name} [${company.start} - ${company.end}]`;
});
console.log(companiesNames);

//square rooting the age
const squareAges = age.map(function(age3){
    return Math.sqrt(age3);
});


console.log(squareAges);
//arrow
//you may add multiple maps together.
const squareAges2 = age
.map(age3=>Math.sqrt(age3))
.map(age3=>age3*2);
console.log(squareAges2);

//sort. sorting companies by start year.

const sortedCompanies = companies.sort(function(c1, c2){
    if(c1.start > c2.start){
        return 1;
    }
    else{
        return -1;
    }
});
console.log(sortedCompanies);

//arrows & terinary operator
const sortedCompanies2 = companies.sort((a,b)=>a.start > b.start ? 1 : -1);
console.log(sortedCompanies2);
//reduce i.e. adding all elements and get one number
const ageTotal = age.reduce(function(total, age5){
    return total +age5;
},0); //it also takes 2nd param inital value of total=0
console.log(ageTotal);
// all in one
const allInOne = age
.map(age6=>age6*3)
.filter(age6=>age6 >=40)
.sort((a,b)=>b-a) //a-b for ascending order
.reduce((a,b)=>a+b,0)//to add all together.
;

console.log(allInOne);