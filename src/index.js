let a = 1

module.exports = function(){
  if(a<2147483647)
    a++
  else
    a = 0
  return '' + new Date().getTime() + a
}

