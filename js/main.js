 AOS.init({
     offset: 400,
     duration: 1000,
     easing: 'ease'
 });

 var dark = document.getElementById("dark");
 dark.onclick = function() {
     document.body.classList.toggle("darktheme");
 }

 function loader() {
     document.querySelector('.loader-container').classList.add('fade-out');
 }

 function M_M() {
     setInterval(loader, 2000);
 }

 window.onload = M_M;