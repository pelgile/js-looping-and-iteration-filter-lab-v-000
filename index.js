// Code your solution in this file

function findMatching(drivers, string){
  newArray =[];
  for (let i=0; i<= drivers.length; i++){
    driverString = drivers[i]
    if(driverString === string){
      newArray.push(driverString)
    }
    else if(driverString.toLowerCase() === string)
    newArray.push(driverString)
  }
  return newArray
}

function fuzzyMatch(){

}


function matchName(){

}
