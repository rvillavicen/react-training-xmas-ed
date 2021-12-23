import React from 'react'

class Comment extends React.Component {
  render() {
    return (
      <div>
        {this.props.author.name}
      </div>
    )
  }
}

export default Comment;
