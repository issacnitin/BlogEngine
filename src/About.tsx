import * as React from 'react';
import './About.css';

class About extends React.Component <{}, { posts: string[]}>{

    public render() {

        let about = "Nitin Issac Joy, 25\n \
                    nitin.i.joy@gmail.com\n \
                    Feel free to contribute to the blog\n \
                    https://github.com/issacnitin/BlogEngine\n".split('\n').map((item, i) => <p key={i}>{item}</p>);;
        return (
            <div className='About'>
                {about}
            </div>
        );
    }
}

export default About;