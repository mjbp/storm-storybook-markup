import React from 'react';
import styles from './styles';
import { MESSAGE } from '../constants';

export default class Markup extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = { markup: false }
        this.onAddMarkup = this.onAddMarkup.bind(this);
    }
    
    onAddMarkup(story) {
        this.setState({ markup: story.markup });
    }
    
    componentDidMount() {
        const { channel, api } = this.props;
        // Listen to the notes and render it.
        channel.on(MESSAGE, this.onAddMarkup);
    
        this.stopListeningOnStory = api.onStory(() => {
          this.onAddMarkup('');
        });
    }
    componentWillUnmount() {
        this.stopListeningOnStory && this.stopListeningOnStory();
    
        this.unmounted = true;
        const { channel, api } = this.props;
        channel.removeListener(MESSAGE, this.onAddMarkup);
    }

    render(){
        return <div style={styles.container}>
        {
            this.state.markup
            ? <div>
                <h1 style={styles.header}>Example</h1>
                <div style={styles.codeContainer}>
                    <pre style={styles.pre}>
                        <code style={styles.code}>{ this.state.markup }</code>
                    </pre>
                </div>
            </div>
            : null
        }
        </div>
    } 
};

