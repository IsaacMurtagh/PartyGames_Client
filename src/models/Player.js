class Player {

  constructor(props) {
    this.alias = props.alias;
    this.creator = props.creator,
    this.joinedAt = new Date(props.joinedAt);
  }
}

export default Player;