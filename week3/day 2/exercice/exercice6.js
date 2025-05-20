const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
message =""
for (key in details){
    message+=key+" "+details[key]+" "

}
console.log(message)