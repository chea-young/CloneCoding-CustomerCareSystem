class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date()
      }
    }
  
    goBack() {
      let nextDate = this.state.date;
      nextDate.setSeconds(nextDate.getSeconds() - 10);
      this.setState({
        date: nextDate
      });
    }

    render() {
      return ( // bind를 사용해야 사용할 수 있다.
        <div>
          <h3>현재 시각은 [{this.state.date.toLocaleTimeString()}] 입니다.</h3>
          <button onClick={this.goBack.bind(this)}>10초 뒤로가기</button> 
        </div>
      );
    }
  }

  ReactDOM.render(
    <Clock />, 
    document.getElementById('root')

  );
  