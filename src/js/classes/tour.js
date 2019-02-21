class Concerts {
  constructor(date, place, time) {
    this.date = date;
    this.place = place;
    this.time = time;
    this.renderEverything()
  }
  renderSingleConcert() {
    let content = `<span>${this.date}</span> <span> ${this.place} </span> <span>${this.time} </span>`;
    let div = `${content}`;
    return div;
  }
  renderEverything() {
    const eventContainer = document.querySelectorAll('.b-tour__dates');
    const eventsDom = [...eventContainer];
    eventsDom.forEach(element => {
      let p = document.createElement('p');
      element.append(p);
      p.innerHTML = this.renderSingleConcert();
    })
  }
}

function showItAll() {
  let concert1 = new Concerts('25/1 -19', 'Altaussee', '19:00');
  let concert2 = new Concerts('20/6 -19', 'Bad Mittendorf', '20:00');
  let concert3 = new Concerts('16/8 -19', 'Bad Aussee', '17:00');
  let concert4 = new Concerts('10/8 -19', 'Bad Ischl', '14:00');
}

class Tour {
  constructor() {
    showItAll();
  }
}

export default Tour;
