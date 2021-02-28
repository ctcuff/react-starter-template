import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'

if (module.hot) {
  module.hot.accept()
}

const App = () => <div>Hello, World!</div>

ReactDOM.render(<App />, document.getElementById('app'))
