class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    componentDidMount() { //초기화가 끝났을 때 자동으로 불러지는 함수
      this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    tick() {
      this.setState({ //state는 두 번째 불러줄 때부터는 setState를 사용해야 한다.
        date: new Date() // 상태를 바꾸어주는 것.
      });
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
