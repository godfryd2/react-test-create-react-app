import * as React from 'react';
import UsersList from './UsersList'

// z braku laku istniaj¹cych userów definiujê po prostu jako sta³¹
// w prawdziwej aplikacji pochodziliby z API i/lub byli w Reduksowym storze 
const allUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania'];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filteredUsers: allUsers
    };
  }

  filterUsers = (e) => {
    const text = e.currentTarget.value;
    const filteredUsers = this.getFilteredUsersForText(text)
    this.setState({
      filteredUsers
    })
  }

  getFilteredUsersForText(text) {
    return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
  }

  render() {
    return (
      <div>
        <input onInput={this.filterUsers} />
        <UsersList users={this.state.filteredUsers} />
      </div>
    );
  }
};

export default App;