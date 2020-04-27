import React from 'react';
class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      this.handleChange = this.handleChange.bind(this);
      // change code below this line
  
      // change code above this line
    }

    componentWillReceiveProps(nextProps){
		if(this.props.initValue !== nextProps.initValue){
			this.setState({input: nextProps.initValue});
		
		}
	}
  
    // change code below this line
   handleChange(event) {
      this.setState({input: event.target.value});
    }
    // change code above this line
    render() {
      return (
        <div>
          { /* change code below this line */}
          <label> Name
          <input type = "text" value = {this.state.input} onChange = {this.handleChange}/>
          </label>
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };

  export default ControlledInput;