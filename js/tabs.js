function openPage(pageName,elmnt,color) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// set active class
let btns = document.querySelectorAll('.tablink');
btns.forEach(btn => {
  btn.addEventListener('click', function(){
    btns.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  })
})