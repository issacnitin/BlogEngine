import * as React from 'react';
import './About.css';

class About extends React.Component <{}, { posts: string[]}>{

    public render() {
        let about = "Nitin Issac Joy\n25, Microsoft".split('\n').map((item, i) => <p key={i}>{item}</p>);;
        return (
            <div>
                {about}
            </div>
        );
    }
}

export default About;