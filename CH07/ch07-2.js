//NOTE 여기에서는 ON/OFF가 변하지 않는다 React는 bilnding 처리가 자동적으로 이루어지지 않기 때문에 
class EventHandling extends React.Component {
    constructor(props) {  
      super(props);  
      this.state = {  
        isToggleOn: true  
      }  
      this.handleClick = this.handleClick.bind(this);  // NOTE bilnding 처리 초기화
    }     
  
    handleClick() {  //NOTE bilnding 예시:  handleClink = () => {
      this.setState(state => ({  
        isToggleOn: !state.isToggleOn  
      }))  
    }
  
    
  
    render() {  
      return (  
        <button onClick={this.handleClick}>  
          {this.state.isToggleOn ? 'ON' : 'OFF'}  
        </button>  
      );  
    }    
  
  }  
  
  
  ReactDOM.render(  
    <EventHandling />,   
    document.getElementById('root')  
  );
  