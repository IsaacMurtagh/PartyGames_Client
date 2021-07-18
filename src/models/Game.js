class Game {

  constructor(props) {
    this.id = props.id;
    this.type = props.type,
    this.name = props.name,
    this.maxPlayers = props.maxPlayers,
    this.createdAt = new Date(props.createdAt);
    this.updatedAt = new Date(props.updatedAt);
  }
}

export default Game;