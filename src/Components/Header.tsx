import * as React from 'react';
import './Header.css';

interface IProps {
    onClickToPage: (page: Pages) => void,
    page: Pages
}

interface IState {

}

export enum Pages {
    About,
    Code,
    Garage,
    Travel,
    Music
}

export default class Header extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
    }

    onClick = (page: Pages) => {
        this.props.onClickToPage(page);
    }

    render() {
        return (
            <div className="Header">
                <div className="HeaderItems" style={{backgroundColor: this.props.page == Pages.About ? '#F0F0F0' : 'black', color: this.props.page == Pages.About ? 'black' : 'white'}} onClick={this.onClick.bind(this, Pages.About)}>About</div>
                <div className="HeaderItems" style={{backgroundColor: this.props.page == Pages.Code ? '#F0F0F0' : 'black', color: this.props.page == Pages.Code ? 'black' : 'white'}} onClick={this.onClick.bind(this, Pages.Code)}>Code</div>
                <div className="HeaderItems" style={{backgroundColor: this.props.page == Pages.Garage ? '#F0F0F0' : 'black', color: this.props.page == Pages.Garage ? 'black' : 'white'}} onClick={this.onClick.bind(this, Pages.Garage)}>Garage</div>
                {
                    /*
                        <div className="HeaderItems" style={{backgroundColor: '#F0F0F0', color: 'black'}}>Travel</div>
                        <div className="HeaderItems" style={{backgroundColor: 'black', color: 'white'}}>Music</div>
                    */
                }
            </div>
        )
    }
}