import logo from "./logo.svg";
import "./App.css";
import FormAdatok from "./FormAdatok";
import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      nevValue: "",
      nem: "férfi",
      textareaValue: "",
      selectValue: "allatok",
      ell: false,
    };
  }

  textHandleChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  selectHandleChange = (event) => {
    this.setState({ selectValue: event.target.value });
  };

  submitHandleClick = (event) => {
    console.log(this.state);
    this.setState({ ell: true });
    event.preventDefault();
  };

  textareaHandleChange = (event) => {
    this.setState({ textareaValue: event.target.value });
  };

  render() {
    return (
      <div className="Form" onSubmit={this.submitHandleClick}>
        <form>
          <fieldset>
            <label>Név: </label>
            <input
              type="text"
              name="nevValue"
              value={this.state.nevValue}
              onChange={this.textHandleChange}
            />
            <input type="submit" value="Ok" />
          </fieldset>
          <br />
          <fieldset>
            <label>Férfi: </label>
            <input
              type="radio"
              name="nem"
              value="férfi"
              checked={this.state.nem == "férfi" ? true : false}
              onChange={this.textHandleChange}
            />
            <label>Nő: </label>
            <input
              type="radio"
              name="nem"
              value="nő"
              checked={this.state.nem == "nő" ? true : false}
              onChange={this.textHandleChange}
            />
          </fieldset>
          <br />
          <textarea
            value={this.state.textareaValue}
            onChange={this.textareaHandleChange}
            rows={10}
            placeholder="Ide írd a szöveget!"
          ></textarea>
          <br />
          <select
            value={this.state.selectValue}
            onChange={this.selectHandleChange}
          >
            <option value="Nincs téma kiválasztva!">Válaszz témát!</option>
            <option value="allatok">Állatok</option>
            <option value="novenyek">Növények</option>
            <option value="egyeb">Egyéb</option>
          </select>
          <input type="submit" value="Ok" />
        </form>
        <section>
          <FormAdatok adatok={this.state} />
        </section>
      </div>
    );
  }
}
export default Form;
