import * as React from 'react';
import './About.css';

export default class About extends React.Component <{}, { posts: string[]}>{

    constructor(props: any) {
        super(props);
    }

    public render() {

        let about = "Nitin Issac Joy\n Software Engineer at Microsoft\n \
                    nitin.i.joy@gmail.com\n".split('\n').map((item, i) => <p key={i}>{item}</p>);
        return (
            <div>
                <div className='About'>
                    {about}
                </div>
            </div>
        );
    }
}