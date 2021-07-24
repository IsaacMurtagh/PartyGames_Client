class User {

  constructor(props) {
    this.id = props.id;
    this.alias = props.alias;
    this.createdAt = new Date(props.createdAt);
    this.updatedAt = new Date(props.updatedAt);
  }
}

export default User;