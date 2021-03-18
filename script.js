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
