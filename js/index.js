const project = [
  {
    hedaer: 'Michal Jackson',
    header2: 'Pop-singer and Dancer',
    description:
      'Michael Jackson was the pop star of the 1980s. He astonished audiences with eye-popping dance moves, notably one called the “moonwalk.” He had an amazing talent for rhythm and dance at a very young age.',
    image: './image/mj.jpg',
    alt: 'dance-image',
  },
  {
    hedaer: 'Hrithik Roshan',
    header2: 'Bollywood Actor and Dacncer',
    description:
      'Hrithik Roshan is an Indian film actor. He id known for his versatility and work ethic. He is also very well known for his great dramatic range. He is considered as the best dancer in Bollywood. He is just like a machine, a robot. It seems as if he can do anything. People say that He became the dance and not a dancer.',
    image: './image/hr.jfif',
    alt: 'dance-image',
  },
  {
    hedaer: 'Dytto',
    header2: 'Professional Dancer',
    description:
      'Dytto is an American dancer, actor, and host. She is often called Robo-Babe, Queen Tut, and the Barbie Girl. She is known for her Tutting, Animation, Slow Motion, and Robotic Dance.',
    image: './image/dytoo.jfif',
    alt: 'dance-image',
  },
  {
    hedaer: 'Rudolf Nureyev',
    header2: 'Ballet dancer and choreographer',
    description:
      'Rudolf Khametovich Nureyev was a Soviet-born ballet dancer and choreographer. Nureyev is regarded by some as the greatest male ballet dancer of his generation.',
    image: './image/rudolf.jfif',
    alt: 'dance-image',
  },
  {
    hedaer: 'Shakira',
    header2: 'Pop-singer and dancer',
    description:
      'Shakira is a Colombian singer-songwriter, dancer, record producer, choreographer, and model. She is born and raised in Barranquilla. Shakira began performing in school, demonstrating Latin, Arabic, and rock and roll influences and belly dancing abilities.',
    image: './image/shakira.jfif',
    alt: 'dance-image',
  },
  {
    hedaer: 'Mikhail',
    header2: '“Dance is the hidden language of the soul.”',
    description:
      'Mikhail is a soviet-born Russian American dancer, choreographer. He is one of the greatest ballet dancers of all time. Even according to many critics he was considered as the greatest ballet dancers of the 20th century.',
    image: './image/mikhil.jpg',
    alt: 'dance-image',
  },
];

function displayTags(imgSrc, heading, subheader, paragraph, text) {
  return `
  <li>
  <div class='list-image'>
  <img src=${imgSrc} alt=${text}/>
  </div>
  <div class='list-info'>
  <h4>${heading}</h4>
  <h6>${subheader}</h6>
  <p>${paragraph}</p>
  </div>
  </li>
  `;
}

function renderHTML(arr) {
  return arr
    .map((elem) => {
      const { hedaer, header2, description, image, alt } = elem;
      return displayTags(image, hedaer, header2, description, alt);
    })
    .join('');
}
const newArr = project.slice(0, 2);
const list = document.querySelector('.feature');
const render = (arr) => {
  if (arr.length !== 4) {
    list.innerHTML = renderHTML(arr);
  } else {
    list.insertAdjacent('beforeend', renderHTML(arr));
  }
};

const check = () => {
  if (window.innerWidth < 768) {
    list.innerHTML = '';
    render(newArr);
  } else {
    list.innerHTML = '';
    render(project);
  }
};
check();

window.onresize = check;

const show = document.querySelector('.showMore');
show.addEventListener('click', () => {
  list.innerHTML = '';
  render(project);
  show.style.display = 'none';
});
