
const header = document.createElement('header');
const navigation = document.createElement('nav');
header.append(navigation);
const logo = document.createElement('div');
logo.setAttribute('class', 'logo')

const lists = document.createElement('ul');


logo.innerHTML ="LOGO"
navigation.append(logo)
lists.innerHTML = `
        <ul>
            <li><a href="">home</a></li>
            <li><a href="">about us</a></li>
            <li><a href="">services</a></li>
            <li><a href="">contact us</a></li> 
        </ul> 
       `;


navigation.append(lists)
export default header
