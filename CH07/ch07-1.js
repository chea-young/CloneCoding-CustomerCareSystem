class EventHandling extends React.Component {
    constructor(props) {  
      super(props);  
    }  

    handleClick() {  
      console.log('이벤트 처리');  
    }
  
    render() {  
      return (  
        <button onClick={this.handleClick}>버튼</button>  
      );  
    }     
  
  }
  

  
  ReactDOM.render(  
    <EventHandling />,   
    document.getElementById('root')
  );
