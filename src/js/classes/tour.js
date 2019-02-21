class Concerts {
  constructor(date, place, time) {
    this.date = date;
    this.place = place;
    this.time = time;
    this.renderEverything();
  }
  createSingleConcertinDOM() {
    let content = `<span>${this.date}</span><span>${this.place}</span><span>${this.time}</span>`;
    return content;
  }
  renderEverything() {
    const eventContainer = document.querySelectorAll('.b-tour__dates');
    const eventsDom = [...eventContainer];
    eventsDom.forEach(element => {
      const timeCheck = this.checkIfDateHasPassed();
      let p = document.createElement('p');
      element.append(p);
      if (timeCheck) {
        p.innerHTML = this.createSingleConcertinDOM();
      } else {
        p.style.padding = "0";
        while (p.firstChild) p.removeChild(p.firstChild);
      }
    })
  }
  checkIfDateHasPassed() {
    const date = new Date();
    const concertDate = new Date(this.date)
    if (date < concertDate) {
      console.log('Future');
      return true
    } else {
      console.log('Past');
      return false
    }
  }
}

function showItAll() {
  let concert1 = new Concerts('2020-09-13', 'Altaussee', '19:00');
  let concert2 = new Concerts('1997-05-04', 'Bad Mittendorf', '20:00');
  let concert3 = new Concerts('1996-01-05', 'Bad Aussee', '17:00');
  let concert4 = new Concerts('2022-01-02', 'Bad Ischl', '14:00');
}

class Tour {
  constructor() {
    showItAll();
  }
}

export default Tour;
