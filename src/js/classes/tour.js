class Tour {
  constructor() {
    renderEverything()
  }
}

let turne = [{
  place: 'Altaussee',
  date: '26/8',
  time: '14:00'
}, {
  place: 'Bad Aussee',
  date: '27/8',
  time: '16:00'
}];

function renderEverything() {

  const eventContainer = document.querySelectorAll('.b-tour__dates');
  const eventsDom = [...eventContainer];
  eventsDom.forEach(data => {
    let elements = turne.map(renderSingleConcert);
    elements.forEach(element => {
      let p = document.createElement('p');
      data.appendChild(p);
      p.innerHTML += element;
    })
  })
}

function renderSingleConcert(concert) {
  let content = `${concert.place} and ${concert.date} at ${concert.time}.`;
  let div = `we play some concerts in ${content}`;
  return div;
}


export default Tour;
