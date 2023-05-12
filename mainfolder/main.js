 import header from "/header/header.js";
 import landPage from "/mainpage/mainjs/landing.js";
 import about from "/mainpage/mainjs/about.js";
 import footer from "/footer/footer.js"; 

 let container = document.getElementById('container')
 const main = document.createElement('main');

 main.append(header);
 main.append(landPage);
 main.append(about);
 main.append(footer);

 document.body.style.background ='black'
 container.append(main);