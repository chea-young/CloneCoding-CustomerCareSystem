function Show(props) {

    return (
      <h3>
        Name is {props.name}
      </h3>
    );
  }
  
  function App() { // 계층적으로 사용
    return (
      <main>
        <Show name="나동빈"/>
        <Show name="홍길동"/>
        <Show name="이순신"/>
      </main>
    );
  }
  
  ReactDOM.render(<App/>, document.getElementById('root'));