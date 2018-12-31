import * as React from 'react';
import './About.css';

class About extends React.Component <{}, { posts: string[]}>{

    public render() {

        let about = "Nitin Issac Joy, 25\nnitin.i.joy@gmail.com".split('\n').map((item, i) => <p key={i}>{item}</p>);;
        return (
            <div className='About'>
                {about}
            </div>
        );
    }
}

export default About;