
class Choice {

  constructor(props) {
    this.description = props.description;
    this.id = props.id;
  }

}

class Round {

  constructor(props) {
    this.round = props.round;
    this.choices = props.choices.map(data => new Choice(data));
    this.createdAt = new Date(props.createdAt);
    this.gameId = props.gameId;
  }
  
}

module.exports = Round;