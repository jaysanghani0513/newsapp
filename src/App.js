import React, { Component } from 'react'
import Navbar from './Compontants/Navbar'
import News from './Compontants/News'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  state =
    {
      progress: 0
    }
  apiKey = "5be8d6a654504e258431ffab9b7a44c2";
  pageSize=9;
  setProgress = (progress) => {
    this.setState({ progress: progress });
  }
  render() {
    return (
      <div>



        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}

          />

          <Routes>
            <Route exact path="/" element={<News  pageSize={this.pageSize}apiKey={this.apiKey} setProgress={this.setProgress} key="general" category="general" />} />
            <Route exact path="/business" element={<News  pageSize={this.pageSize}apiKey={this.apiKey} setProgress={this.setProgress} key="business" category="business" />} />
            <Route exact path="/entertainment" element={<News  pageSize={this.pageSize}apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" category="entertainment" />} />
           
            <Route exact path="/health" element={<News  pageSize={this.pageSize}apiKey={this.apiKey} setProgress={this.setProgress} key="health" category="health" />} />
            <Route exact path="/science" element={<News  pageSize={this.pageSize}apiKey={this.apiKey} setProgress={this.setProgress} key="science" category="science" />} />
            <Route exact path="/sports" element={<News  pageSize={this.pageSize}apiKey={this.apiKey} setProgress={this.setProgress} key="sports" category="sports" />} />
            <Route exact path="/technology" element={<News  pageSize={this.pageSize}apiKey={this.apiKey} setProgress={this.setProgress} key="technology" category="technology" />} />

          </Routes>

        </Router>



      </div>
    )
  }
}
