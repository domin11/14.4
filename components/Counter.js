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
    },
	getDefaultProps() {
       console.log('Metoda getDefaultProps ustawia domyśle wartości propsów, jeśli nie zostały zdefiniowane');
    },
	
	componentWillMount() {
		console.log('Metoda componentWillMount przygotowywuje komponent do renderowania')
	},
	
	componentDidMount() {
		console.log('Metoda componentDidMount jest wywoływana, gdy komponent widnieje już na stronie i możemy wykonywać na nim operacje')
	},
	
	componentWillReceiveProps() {
		console.log('Metoda componentWillReceiveProps jest wywoływana, gdy komponent ma zostać zaktualizowany na podstawie nowych właściwości')
	},
	
	shouldComponentUpdate() {
		return true;
		console.log('Metoda shouldComponentUpdate sprawdza czy komponent faktycznie dostaje nowe właściwości')
	},
	
	componentWillUpdate() {
		console.log('Metoda componentWillUpdate przygotowywuje komponent do aktualizacji')
	},
	
	componentDidUpdate() {
		console.log('Metoda componentDidUpdate aktualizuje komponent')
	},
	
	componentWillUnmount() {
		console.log('Metoda componentWillUnmount usuwa pozostałości po niepotrzebnym komponencie')
	},
});