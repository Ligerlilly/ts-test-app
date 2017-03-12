import * as React from 'react'
const connect = require('react-redux').connect
import * as actionCreators from '../redux/action_creators'


interface HelloProps extends React.Props<any> {
    greeting: string
    setGreeting: Function,
}

type Hello = {
    greeting: string
}


class HelloWorld extends React.Component<HelloProps, Hello> {
     constructor(props: HelloProps) {
        super(props)

        this.setGreeting = this.setGreeting.bind(this)
        this.saveGreeting = this.saveGreeting.bind(this)
        this.state = {
            greeting: props.greeting,
        }
    }

    setGreeting(e: any) {
        this.setState({greeting: e.target.value})
    }

    backPage() {
        this.context.router.goBack()
    }

    saveGreeting() {
        this.props.setGreeting(this.state.greeting)
    }

    render() {
        const { greeting } = this.props
        return (
            <div>
                <h2>{greeting}</h2>
                 <input type="text" value={this.state.greeting} onChange={this.setGreeting} />
                 <button onClick={this.saveGreeting}>Save</button>
            </div>
        )
    }
}

export default connect(
    (state:any) => state.hello, actionCreators
)(HelloWorld)