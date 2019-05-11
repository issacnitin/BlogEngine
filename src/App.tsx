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
                var headings = []
                for (var post of posts) {
                  headings.push(RegEx.getMatch(post as string, '<h1>*</h1>'));
                }
                this.setState({
                  posts: posts,
                  postHeadings: headings
                });
                
            });
        });
    });
  }

  scrollTo = (item: any) => {
    console.log(item)
    window.scrollTo({top: item.ref.current.offsetTop, behavior: 'smooth'});
  }

  public render() {
    var renderItem : any[] = [];
    for(var item in this.state.posts){
      var refs: React.RefObject<HTMLDivElement> = React.createRef();
      renderItem.push(<div key={item + 'a'} ref={refs} className="App" dangerouslySetInnerHTML={{__html: this.state.posts[item]}}></div>)
      renderItem.push(<br key={item + 'b'}/>)
    }

    var scrollRenderItems: any[] = [];
    scrollRenderItems.push(<div key='cont'>Contents</div>)
    for(var item in this.state.postHeadings) {
      scrollRenderItems.push(<div key={item + 'c'} style={{margin: 10}} onClick={this.scrollTo.bind(this, renderItem[2*Number.parseInt(item)])}><a href="#">{this.state.postHeadings[item]}</a></div>)
      scrollRenderItems.push(<br key={item + 'd'} />)
    }

    return (
      <div className="rowC">
        <div style={{width:"100%"}}>
          {scrollRenderItems}
        </div>
        <div className="cancelRowC" style={{marginLeft: "8%", marginRight: "20%"}}>
          {renderItem}
        </div>
      </div>
    );
  }
}

export default App;
