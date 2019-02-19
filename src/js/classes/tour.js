class Tour {
  constructor() {
    const eventContainer = document.querySelectorAll('.b-tour__dates');
    if (eventContainer) {
      renderEverything()
    }


  }
};

const turne = [{
    date: '26/8',
    place: 'Altaussee',
    time: '14:00'
  }, {
    date: '27/8',
    place: 'Bad Aussee',
    time: '16:00'
  },
  {
    date: '15/8',
    place: 'Bad Ischl',
    time: '19:00'
  }, {
    date: '10/8',
    place: 'somehere',
    time: '20:00'
  }
];

function renderEverything() {
  const eventContainer = document.querySelectorAll('.b-tour__dates');
  const eventsDom = [...eventContainer];
  eventsDom.forEach(data => {
    let elements = turne.map(renderSingleConcert);
    elements.forEach(element => {
      let p = document.createElement('p');
      data.appendChild(p);
      p.innerHTML += element;
    });
  });
};

function renderSingleConcert(concert) {
  let content = ` ${concert.date} in ${concert.place} and we play at ${concert.time}.`;
  let div = `This day the${content}`;
  return div;
};


export default Tour;
