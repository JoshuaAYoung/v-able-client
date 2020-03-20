import React, { Component } from 'react'

const QualinteerContext = React.createContext({
  jobs: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  addJob: () => { },
  setJobs: () => { }
})

export default ArticleContext

export class ArticleProvider extends Component {
  state = {
    article: nullArticle,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setJobs = jobs => {
    this.setState({ jobs })
  }

  addJob = job => {
    this.setJobs([
      ...this.state.jobs,
      job
    ])
  }

  render() {
    const value = {
      article: this.state.article,
      comments: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setArticle: this.setArticle,
      setComments: this.setComments,
      clearArticle: this.clearArticle,
      addComment: this.addComment,
    }
    return (
      <QualinteerContext.Provider value={value}>
        {this.props.children}
      </QualinteerContext.Provider>
    )
  }
}
