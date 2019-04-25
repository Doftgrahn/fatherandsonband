class Concerts {
  constructor(date, place, time) {
    this.date = date;
    this.place = place;
    this.time = time;
    this.renderEverything();
  }
  createSingleConcertinDOM() {
    const content = `<span>${this.date}</span><span>${this.place}</span><span>${this.time}</span>`;
    return content;
  }
  renderEverything() {
    const eventContainer = document.querySelectorAll('.b-tour__dates');
    const eventsDom = [...eventContainer];
    eventsDom.forEach(element => {
      const timeCheck = this.checkIfDateHasPassed();
      const paragraph = document.createElement('p');
      if (timeCheck) {
        element.append(paragraph);
        paragraph.innerHTML = this.createSingleConcertinDOM();
      } else {
        paragraph.remove();
      }
    })
  }
  checkIfDateHasPassed () {
    const date = new Date();
    const hasDatePassed = new Date(this.date)
    if (date < hasDatePassed) {
      return true
    }
  }
}

function showItAll() {
  let concert1 = new Concerts('2020-09-13', 'Altaussee', '19:00');
  let concert2 = new Concerts('1997-05-04', 'Bad Mittendorf', '20:00');
  let concert3 = new Concerts('1996-01-05', 'Bad Aussee', '17:00');
  let concert4 = new Concerts('2022-01-02', 'Bad Ischl', '14:00');
  let concert5 = new Concerts('2025-01-05', 'Göteborg', '20:00');
}

class Tour {
  constructor() {
    showItAll();
  }
}

export default Tour;
