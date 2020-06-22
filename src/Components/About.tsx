import * as React from 'react';
import './About.css';

export default class About extends React.Component <{}, { posts: string[]}>{

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <div className='About'>
                </div>
            </div>
        );
    }
}