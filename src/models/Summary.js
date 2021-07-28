
class Summary {

  constructor(props) {
    this.results = props.results;
  }

  fromApiResponse(props) {
    return new Summary(props);
  }
}

module.exports = Summary;