function Show(props) {
    return (
      <h3>
        Name is {props.name}
      </h3>
    );
  }
  
  const element = <Show name="나동빈"/>; // 컨포넌트를 HTML 태그처럼 사용
  ReactDOM.render(element, document.getElementById('root'));