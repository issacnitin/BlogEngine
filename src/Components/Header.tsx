import * as React from 'react';
import './Header.css';

interface IProps {

}

interface IState {

}

export default class Header extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="Header">
                <div className="HeaderItems" style={{backgroundColor: 'maroon', color: 'white'}}>About</div>
                <div className="HeaderItems" style={{backgroundColor: 'green', color: 'white'}}>Code</div>
                <div className="HeaderItems" style={{backgroundColor: 'darkblue', color: 'white'}}>Garage</div>
                <div className="HeaderItems" style={{backgroundColor: 'white', color: 'black'}}>Travel</div>
                <div className="HeaderItems" style={{backgroundColor: 'black', color: 'white'}}>Music</div>
            </div>
        )
    }
}