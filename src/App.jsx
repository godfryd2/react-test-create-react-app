import * as React from "react";
import { ContactsList } from "./ContactsList";
import { AppHeader } from "./AppHeader";

export class App extends React.Component {
  state = {
    name: '',
    color: 'blue',
    message: '',
    isChecked: true,
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
    console.log("e.target: " + e.target.value);
  }
  handleColorChange = (e) => {
    this.setState({
      color: e.target.value
    });
  }
  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value
    });
  }
  handleCheckboxChange = (e) => {
    this.setState({
      isChecked: e.target.checked
    });
  }

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.handleNameChange} /><br />
        {this.state.name}<br />
        <select value={this.state.color} onChange={this.handleColorChange}>
          <option value="red">Czerwony</option>
          <option value="blue">Niebieski</option>
          <option value="green">Zielony</option>
        </select><br />
        {this.state.color}<br />
        <textarea value={this.state.message} onChange={this.handleMessageChange} /><br />
        {this.state.message}<br />
        <label>
          <input type="checkbox" checked={this.state.isChecked} onChange={this.handleCheckboxChange} />
        </label>
        {this.state.isChecked}<br />
      </div>
    );
  }
}