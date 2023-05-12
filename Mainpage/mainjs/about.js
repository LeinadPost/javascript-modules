const about = document.createElement('section');
about.setAttribute('class', 'about')
const person = document.createElement('img')
person.setAttribute('src', '/travel-person-iso.png')
about.append(person)

const aboutInfo = document.createElement('div');
aboutInfo.setAttribute('class', 'abouttext');

aboutInfo.innerHTML = `
    <h1>ABOUT US</h1>
    <h3>Did you know that a biome is defined by the dominant <br> plants in an area? 
     They are broad regions that are full of.</h3>
    <P>Explore each of these terrestrial biomes to learn about the <br> plants and animals in them to learn about the plants and <br> animals in them.</P> `

about.append(aboutInfo);
export default about;