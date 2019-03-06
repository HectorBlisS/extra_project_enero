import React, { Component } from 'react';
import { getBooks, postBook } from './services/books'
import './App.css';
import firebase from './services/firebase'
import axios from 'axios'

class App extends Component {

  state = {
    books: [],
    book: {}
  }

  componentDidMount() {
    getBooks()
      .then(books => {
        this.setState({ books })
      })
      .catch(e => alert(e))

  }

  onChange = e => {
    let { book } = this.state
    book[e.target.name] = e.target.value
    this.setState({ book })
  }

  onClick = () => {
    let { book } = this.state
    postBook(book)
      .then(b => {
        let { books } = this.state
        books.unshift(b)
        this.setState({ books })
      })
      .catch(e => alert(e))
  }

  firebaseLogin = () => {
    let provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        let { accessToken } = result.credential
        localStorage.setItem('accessToken', accessToken)
        axios.get("http://localhost:3000/facebook/signup", {
          headers: {
            Authorization: "Bearer " + accessToken
          }
        })
          .then(res => {
            console.log(res)
          })
          .catch(e => alert(e))
      })
      .catch(e => alert(e))
  }

  render() {
    let { books } = this.state
    return (
      <div>
        <button onClick={this.firebaseLogin} >Facebook Login</button>
        {books.map(b => <p key={b._id} >{b.name}</p>)}
        <hr />
        <div>
          <input onChange={this.onChange} placeholder="Nombre del libro" name="name" type="text" />
          <br />
          <input onChange={this.onChange} placeholder="Author del libro" name="author" type="text" />
          <button onClick={this.onClick} >Subir libro</button>
        </div>
      </div>
    );
  }
}

export default App;
