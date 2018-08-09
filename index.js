// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0, 2)
}

const returnLastTwoDrivers = function(arr){
  return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(ammount){
  return function (fare){
    return fare * ammount
  }
}

const fareDoubler = (function(fare){
  return createFareMultiplier(2)
})()

const fareTripler = (function(fare){
  return createFareMultiplier(3)
})()

const selectDifferentDrivers = function(arr1, arr2){
  return arr2(arr1)
}
