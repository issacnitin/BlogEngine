import * as React from 'react';
import './App.css';

class App extends React.Component <{}, { posts: string}>{

  // let blogposts: { [key:string]:string } = {} as { [key:string]:string };
  constructor(props: any) {
    super(props);
    this.state = {
      posts: ""
    };

    const thisObject: any  = this;
    fetch(process.env.PUBLIC_URL + "/posts/firstpost").then((response: Response) => {
      (response.body as ReadableStream).getReader().read().then((content) => {
        var encodedString = String.fromCharCode.apply(null, content.value);
        thisObject.setState({ posts: encodedString });
      });
    });
  }

  public render() {
    return (
      <div className="App">
        <h1>{this.state.posts}</h1>
      </div>
    );
  }
}

export default App;
