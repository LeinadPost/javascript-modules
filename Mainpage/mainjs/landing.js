 const landPage = document.createElement('section');
 const landInfo = document.createElement('div');

 landInfo.setAttribute('class', 'landInfo');


 landPage.append(landInfo)
 landInfo.innerHTML = `
 <button><a href="">register</a></button>
 <h1>Theme of the text</h1>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas explicabo quo mollitia. <br> Odio, eius. Dolorem, maxime obcaecati. Dolor, rerum cupiditate.</p>
 `;

 const image = document.createElement('div')
 image.setAttribute('class',  'image');

 const img = document.createElement('img');
 img.setAttribute('src', '/animation.jpg')

 image.append(img);
 landPage.append(image);
 export default landPage