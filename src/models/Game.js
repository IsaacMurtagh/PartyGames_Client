import Player from './Player';

function transformParticipantsToMap(participants) {
  return participants.reduce((map, obj) => {
    map[obj.alias] = new Player(obj);
    return map;
  }, {})
}

class Game {

  constructor(props) {
    this.id = props.id;
    this.type = props.type;
    this.name = props.name;
    this.allowNicknames = props.allowNicknames;
    this.participants = props.participants;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.status = props.status;
  }

  static fromApiResponse(data) {
    return new Game({
      ...data,
      createdAt: new Date(data.createdAt),
      updatedAt: new Date(data.updatedAt),
      participants: transformParticipantsToMap(data.participants),
    })
  }
}

export default Game;