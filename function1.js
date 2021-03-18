let zodiac = prompt("Please enter Year of birth");
let year = parseInt(zodiac);
switch(year){
    case 2020: case 2018:case 2016: case 1996: case 1984:  case 1972:
        alert(`${year} + is Rat ZODIAC SIDNS`);
        console.log(`${year} + is Rat ZODIAC SIDNS`);
        document.getElementById("hContent").innerHTML=(`${year} + is Rat ZODIAC SIDNS`);
        break;
    case 2021: case 2019:case 2017: case 1997: case 1985:  case 1973:
        alert(`${year} + is Oxen ZODIAC SIDNS`);
        console.log(`${year} + is Oxen ZODIAC SIDNS`);
        document.getElementById("hContent").innerHTML=(`${year} + is Oxen ZODIAC SIDNS`);
        break;
    default:
        alert(`${year} + is ERROR ZODIAC SIDNS`);
        console.log(`${year} + is ERROR ZODIAC SIDNS`);
        document.getElementById("hContent").innerHTML=(`${year} + is ERROR ZODIAC SIDNS`);
}
//Function in javascript(ES6)
// 1.Declaration Function
let data1 = prompt("Enter any value1:");
let data2 = prompt("Enter any value2:");
let cdata1 = parseInt(data1);
let cdata2 = parseInt(data2);
function myZodiac(a,b,ily)//formal parameter
{
    let z = a+b;
    console.log(`${z} = ${a}+${b} ${ily}`);
    document.getElementById("hContent").innerHTML=(`${z} = ${a}+${b} ${ily}`);
}

myZodiac(cdata1,cdata2,"I Love You");//argument parameter(Active parameter)