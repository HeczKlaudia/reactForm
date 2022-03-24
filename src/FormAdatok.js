import React from "react";

class FormAdatok extends React.Component {
  render() {
    if (this.props.adatok.ell) {
      return (
        <div className="adatok">
          <h3>A form adatai</h3>
          <p>név: {this.props.adatok.nevValue}</p>
          <p>nem: {this.props.adatok.nem}</p>
          <p>szöveg: {this.props.adatok.textareaValue}</p>
          <p>A kiválasztott téma: {this.props.adatok.selectValue}</p>
        </div>
      );
    } else {
      return (
        <div className="adatok">
          <p>Kérem töltse ki az űrlapot!</p>
        </div>
      );
    }
  }
}

export default FormAdatok;
