import * as React from 'react'



class HelloWorld extends React.Component<null, null> {
    static get contextTypes() {
        return { router: React.PropTypes.object.isRequired }
    }

    render() {
        return (
            <div>
                <h2>hello</h2>
            </div>
        )
    }
}

export default HelloWorld