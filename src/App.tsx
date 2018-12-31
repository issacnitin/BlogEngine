import * as React from 'react';
import './App.css';
import * as Parser from './Utilities/Parser';
import About from './About';

class App extends React.Component <{}, { posts: string[]}>{

  // let blogposts: { [key:string]:string } = {} as { [key:string]:string };
  constructor(props: any) {
    super(props);
    this.state = { posts: [] };

    const thisObject: any  = this;
    fetch(process.env.PUBLIC_URL + "/posts/firstpost").then((response: Response) => {
      (response.body as ReadableStream).getReader().read().then((content) => {
        var encodedString = Parser.parseBlog(String.fromCharCode.apply(null, content.value));
        var posts = this.state.posts;
        posts.push(encodedString);
        thisObject.setState({
          posts: posts
        });
      });
    });

    fetch(process.env.PUBLIC_URL + "/posts/secondpost").then((response: Response) => {
      (response.body as ReadableStream).getReader().read().then((content) => {
        var encodedString = Parser.parseBlog(String.fromCharCode.apply(null, content.value));
        var posts = this.state.posts;
        posts.push(encodedString);
        thisObject.setState({
          posts: posts
        });
      });
    });
  }

  public render() {
    var renderItem : any[] = [];
    for(var item in this.state.posts){
      renderItem.push(<div className="App" dangerouslySetInnerHTML={{__html: this.state.posts[item]}}></div>)
    }
    return (
      <div className='rowC'>
        <About/>
        <div className='cancelRowC'>
          {renderItem}
        </div>
      </div>
    );
  }
}

export default App;
