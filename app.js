module.exports.addNumber=(event,context) =>{
  context.succeed(event.n1+event.n2)
}

module.exports.subNumber=(event,context) =>{
  context.succeed(event.n1-event.n2)
}
