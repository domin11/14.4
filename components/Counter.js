var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
	
	 decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('h1', {}, this.state.counter),
			React.createElement('button', {onClick: this.increment, className: 'btn btn-dark'}, 'plus'),
			React.createElement('button', {onClick: this.decrement, className: 'btn btn-dark'}, 'minus')
        );
    }
});