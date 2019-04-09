import React, { Component } from 'react';

class FormMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameMovie: '',
      url: '',
      textarea: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    this.props.onSubmitForm(this.state);
  }


  render() {
    return (
      <div className="FormMovie">
        <h1>Mon film préféré</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="nameMovie">Nom du film</label>
              <input
                type="text"
                id="nameMovie"
                name="nameMovie"
                onChange={this.onChange}
                value={this.state.nameMovie}
              />
            </div>

            <div className="form-data">
              <label htmlFor="url">Url</label>
              <input
                type="url"
                id="url"
                name="url"
                onChange={this.onChange}
                value={this.state.url}
              />
            </div>

            <div className="form-data">
              <label htmlFor="textarea">Votre commentaire</label>
              <input
                type="textarea"
                id="textarea"
                name="textarea"
                onChange={this.onChange}
                value={this.state.textarea}
              />
            </div>

            <hr />
            <div className="form-data">
              <input type="submit" value="Submit" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}



export default FormMovie;
