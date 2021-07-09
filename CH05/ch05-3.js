class Clock extends React.Component {
    /*
    constructor(props) { //NOTE 생성사 사용시 super를 무조건 사용해야 한다.
        super(props);
    }
    */

    render() {
      return (
        <h3>현재 시각은 [{this.props.date.toLocaleTimeString()}] 입니다.</h3>
      );
    }
  }
  
  function tick() {
    ReactDOM.render(
      <Clock date={new Date()}/>, document.getElementById('root')
    );
  }
  setInterval(tick, 1000);

