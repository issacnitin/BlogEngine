import * as React from "react";

interface IProps {

}

interface IState {

}

export class NewPost extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
    }

    handleOnSubmit = () => {

    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <textarea />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}