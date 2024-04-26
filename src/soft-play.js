// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

const total = {
  adults: 0,
  children: 0
}

function occupancy() {
  return {
    adults,
    children
  }
}

function enter(adultsInput, childrenInput) {
  if (childrenInput > adultsInput) {
    return false
  } else {
    adults += adultsInput
    children += childrenInput
    total.adults += adultsInput
    total.children += childrenInput
    return true
  }
}

function leave(adultsInput, childrenInput) {
  if (children > adults - adultsInput) {
    if (childrenInput === adultsInput) {
      adults -= adultsInput
      children -= childrenInput
      return true
    } else {
      return false
    }
  } else {
    if (adults - adultsInput > childrenInput) {
      adults -= adultsInput
      children -= childrenInput
      return true
    } else if (childrenInput < adultsInput >= 2) {
      adults -= adultsInput
      children -= childrenInput
      return true
    } else {
      return false
    }
  }
}

function counter() {
  return total
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  total: counter
}
