import * as React from 'react'
const { connect } = require('react-redux')

interface HelloProps extends React.Props<any> {
    greeting: string
}



class HelloWorld extends React.Component<HelloProps, null> {
    static get contextTypes() {
        return { router: React.PropTypes.object.isRequired }
    }

    render() {
        return (
            <div>
                <h2>{this.props.greeting}</h2>
            </div>
        )
    }
}

export default connect(
    (state:any) => state.hello
)(HelloWorld)