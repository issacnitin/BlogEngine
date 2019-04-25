import * as React from 'react';
import './App.css';
import Batch from './Utilities/Batch';
import RegEx from './Utilities/RegEx';

class App extends React.Component <{}, { posts: string[], postHeadings: string[] }>{

  // let blogposts: { [key:string]:string } = {} as { [key:string]:string };
  constructor(props: any) {
    super(props);
    this.state = { posts: [], postHeadings: [] };
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
                var headings = []
                for (var post of posts) {
                  headings.push(RegEx.getMatch(post as string, '<h1>*</h1>'));
                }
            });
        });
    });
  }

  scrollTo = () => {

  }

  public render() {
    var renderItem : any[] = [];
    for(var item in this.state.posts){
      renderItem.push(<div key={item + 'a'} className="App" dangerouslySetInnerHTML={{__html: this.state.posts[item]}}></div>)
      renderItem.push(<br key={item + 'b'}/>)
    }

    var scrollRenderItems: any[] = [];
    for(var item in this.state.postHeadings) {
      scrollRenderItems.push(<div key={item} onClick={this.scrollTo.bind(this)}>{this.state.postHeadings[item]}</div>)
    }

    return (
      <div className="col-lg-1 col-centered">
        <div>
          {scrollRenderItems}
        </div>
        <div style={{marginLeft: "16%", marginRight: "16%"}}>
          {renderItem}
        </div>
      </div>
    );
  }
}

export default App;
