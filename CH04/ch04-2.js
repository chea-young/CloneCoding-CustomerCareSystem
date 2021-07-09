function Show(props) {
    return (
      <h3>
        Name is {props.name}
      </h3>
    );
  }

Show.defaultProps = {
    name: '홍길동'
  }; // name 으로 아무것도 안주는 경우 '홍길동'이 입력되도록 사용할 수 있다.

  ReactDOM.render(<Show/>, document.getElementById('root'));