var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}


var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

function sendEmail() {
Email.send({
    Host : "smtp.mailtrap.io",
    Username : "<Mailtrap username>",
    Password : "<Mailtrap password>",
    To : 'baileyweiss5180@gmail.com',
    From : "sender@example.com",
    Subject : "Test email",
    Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
}).then(
  message => alert(message)
);
}