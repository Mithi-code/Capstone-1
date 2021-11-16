const project = [
  {
    id: 1,
    hedaer: 'Multi-Post Stories',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a standard dummy text.`,
    image: './image/dance2.jpg',
    technologies: ['Html', 'css', 'bootstrap', 'Ruby'],
  },
  {
    id: 3,
    hedaer: 'Data DashboardHealthcare',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a standard dummy text.`,
    image: './image/dance2.jpg',
    technologies: ['Html', 'bootstrap', 'Ruby'],
  },
  {
    id: 4,
    hedaer: 'Website Protfolio',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a standard dummy text.`,
    image: './image/dance2.jpg',
    technologies: ['Html', 'bootstrap', 'Ruby'],
  },
  {
    id: 5,
    hedaer: 'Profesional Art Printing Data More',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a standard dummy text.`,
    image: './image/dance2.jpg',
    technologies: ['Html', 'bootstrap', 'Ruby'],
  },
  {
    id: 6,
    hedaer: 'Data DashboardHealthcare',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a standard dummy text.`,
    image: './image/dance2.jpg',
    technologies: ['Html', 'bootstrap', 'Ruby'],
  },
  {
    id: 7,
    hedaer: 'Website Protfolio',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a standard dummy text.`,
    image: './image/dance2.jpg',
    technologies: ['Html', 'bootstrap', 'Ruby'],
  },
];

project.forEach((p) => {
  const paerntDiv = document.createElement('div');
  const div = document.createElement('div');
  const header = document.createElement('h4');
  const span = document.createElement('span');
  const img = document.createElement('img');
  const para = document.createElement('p');
  const br = document.createElement('br');
  span.innerText = p.hedaer;
  header.innerText = p.hedaer;
  para.innerText = p.description;
  img.setAttribute('src', p.image);
  header.append(br);
  header.append(span);
  div.append(header);
  div.append(para);
  paerntDiv.append(img);
  paerntDiv.append(div);
  document.querySelector('.feature').append(paerntDiv);
});
