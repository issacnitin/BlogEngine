import * as React from 'react';
import './App.css';

class App extends React.Component <{}, { posts: string}>{

  // let blogposts: { [key:string]:string } = {} as { [key:string]:string };
  constructor(props: any) {
    super(props);
    this.state = {
      posts: ""
    };

    const fs = require('fs');
    const thisObject = this;
    fs.readdir('posts', (err: any, filenames: any) => {
      if(err) { return; }
      filenames.forEach((filename: any) => {
        fs.readfile('posts/' + filename, (err2: any, content: any) => {
          if(err2) { return; }
          thisObject.setState({
            posts: content
          });
        });
      });
    })

  }

  public render() {
    return (
      <div className="App">
      {this.state.posts}
      </div>
    );
  }
}

export default App;
