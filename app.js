module.exports.addNumber=(event,context) =>{
  context.succeed(event.n1+event.n2)
}

module.exports.subNumber=(event,context) =>{
  context.succeed(event.n1-event.n2)
}

module.exports.fibonacci=(event,context) =>{
  context.succeed({n1:event.n2,n2:event.n1+event.n2,num:event.num-1})
}
