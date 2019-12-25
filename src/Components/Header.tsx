import * as React from 'react';
import './Header.css';

interface IProps {
    onClickToPage: (page: Pages) => void
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
                <div className="HeaderItems" style={{backgroundColor: 'black', color: 'white'}}>About</div>
                <div className="HeaderItems" style={{backgroundColor: '#F0F0F0', color: 'black'}}>Code</div>
                <div className="HeaderItems" style={{backgroundColor: 'black', color: 'white'}}>Garage</div>
                <div className="HeaderItems" style={{backgroundColor: '#F0F0F0', color: 'black'}}>Travel</div>
                <div className="HeaderItems" style={{backgroundColor: 'black', color: 'white'}}>Music</div>
            </div>
        )
    }
}