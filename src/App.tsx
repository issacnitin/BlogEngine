import * as React from 'react';
import './App.css';
import About from './About';
import Batch from './Utilities/Batch';

class App extends React.Component <{}, { posts: string[]}>{

  // let blogposts: { [key:string]:string } = {} as { [key:string]:string };
  constructor(props: any) {
    super(props);
    this.state = { posts: [] };
    fetch(process.env.PUBLIC_URL + "/posts/postorder").then((response: Response) => {
      (response.body as ReadableStream).getReader().read().then((content) => {
        var encodedString = String.fromCharCode.apply(null, content.value).split('\n');
        var batchApi = [];
        for(var api of encodedString) {
          // TODO: Batch the calls
          batchApi.push(process.env.PUBLIC_URL + "/posts/" + api);
        }
        Batch.Get(batchApi)
        .then((posts: any) => {
          this.setState({
            posts: posts
          });
        });
      });
    });
  }

  public render() {
    var renderItem : any[] = [];
    for(var item in this.state.posts){
      renderItem.push(<div key={item} className="App" dangerouslySetInnerHTML={{__html: this.state.posts[item]}}></div>)
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
