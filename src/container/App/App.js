import './App.css'
import React, { Component } from 'react'
import Header from '@src/components/Header/Header'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header title={'急速贷款'} />
            </div>
        )
    }
}

export default App
