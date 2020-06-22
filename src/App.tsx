import * as React from 'react';
import './App.css';
import Batch from './Utilities/Batch';
import RegEx from './Utilities/RegEx';
import About from './Components/About';
import Header, { Pages } from './Components/Header';

class App extends React.Component <{}, { posts: string[], postHeadings: string[], page: Pages }>{

  // let blogposts: { [key:string]:string } = {} as { [key:string]:string };
  constructor(props: any) {
    super(props);
    this.state = { posts: [], postHeadings: [], page: Pages.Code };
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
    this.setState({
      page: Pages.Code
    }, () => {
      console.log(item)
      window.scrollTo({top: item.ref.current.offsetTop, behavior: 'smooth'});
    });
  }

  onClickToPage = (page: Pages) => {
    this.setState({
      page: page
    });
  }

  public render() {
    var renderItem : any[] = [];
    for(var item in this.state.posts){
      var refs: React.RefObject<HTMLDivElement> = React.createRef();
      renderItem.push(<div key={item + 'a'} ref={refs} className="App" dangerouslySetInnerHTML={{__html: this.state.posts[item]}}></div>)
      renderItem.push(<br key={item + 'b'}/>)
    }

    var scrollRenderItems: any[] = [];
    scrollRenderItems.push(<br />);
    for(var item in this.state.postHeadings) {
      scrollRenderItems.push(<div key={item + 'c'} style={{margin: 10}} onClick={this.scrollTo.bind(this, renderItem[2*Number.parseInt(item)])}><a href="#" style={{outline:'none', color: '#0F0F0F'}}>{this.state.postHeadings[item]}</a></div>)
      scrollRenderItems.push(<br key={item + 'd'} />);
    }
    let about = "Nitin Issac Joy\n Software Engineer at Microsoft\n \
                nitin.i.joy@gmail.com\n".split('\n').map((item, i) => <p key={i}>{item}</p>);

    let customJSX: JSX.Element;
    
    switch(this.state.page) {
      case Pages.Code:
        customJSX = 
        <div className="cancelRowC" style={{paddingLeft: "8%", paddingRight: "12%", backgroundColor:"#F0F0F0"}}>
              {renderItem}
        </div>;
        break;
      case Pages.About:
        customJSX = <About />;
        break;
      default:
        customJSX = <div />;
        break;
    }
    
      return (
        <div>
          <Header onClickToPage={this.onClickToPage} page={this.state.page}/>
          <div className="rowC">
            <div style={{width:"100%", backgroundColor:"#A0A0A0", position:'sticky', top:0}}>
              <div className="About">
                {about}
              </div>
              {scrollRenderItems}
            </div>
            {customJSX}
          </div>
        </div>
      );   
  }
}

export default App;
