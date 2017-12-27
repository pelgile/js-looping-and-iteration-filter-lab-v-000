// Code your solution in this file

function findMatching(drivers, string){
  newArray =[];
  for (let i=0; i<= drivers.length; i++){
    let driverString = drivers[i]
    if(driverString === string || driverString.toLowerCase() === string){
      newArray.push(driverString)
    }
  }
  return newArray
}

function fuzzyMatch(){

}


function matchName(){

}
