class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()}; //처음에만 들어가고 계속 변하는 동작이 있지 않기 때문에 시간이 변하지 않는 것
    }

    render() {
      return (
        <h3>현재 시각은 [{this.state.date.toLocaleTimeString()}] 입니다.</h3>
      );
    }
  }
  ReactDOM.render(
    <Clock />, 
    document.getElementById('root')
  );
