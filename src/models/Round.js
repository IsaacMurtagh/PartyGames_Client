
class Choice {

  constructor(props) {
    this.description = props.description;
    this.id = props.id;
    this.chosen = false;
  }

  select() {
    this.chosen = true;
  }

}

class Round {

  constructor(props) {
    this.roundNumber = props.roundNumber;
    this.choices = props.choices.map(data => new Choice(data));
    this.createdAt = new Date(props.createdAt);
    this.gameId = props.gameId;
  }

  get choiceId() {
    return this.choices.find(c => c.chosen)?.id;
  }

  get choiceMade() {
    return !!this.choices.find(c => c.chosen);
  }
  
}

module.exports = Round;