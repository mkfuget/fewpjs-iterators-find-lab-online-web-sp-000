const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(array){
  out = array.find( s => s.result === "W")
  return (out ? out.year : undefined)

}
