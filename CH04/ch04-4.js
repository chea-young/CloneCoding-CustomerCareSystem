function User(props) {
    return (
      <div>
        <img src={props.user.imageUrl}/>
        &nbsp;<strong>{props.user.name}</strong>
      </div>
    );
  }

  function Board(props) {
    return (
      <section>
        <User user={props.user}/>
        {props.title}
        <hr/>
        {props.content}
      </section>
    );
  }

  
  const board = { // 실제 개발 시에는 웹 서버에서 가져온다.
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다. 반갑습니다.',
    user: {
      name: '나동빈',
      imageUrl: 'https://placeimg.com/32/32/any'
    }
  }

  ReactDOM.render(
    <Board
      title={board.title}
      content={board.content}
      user={board.user}
    />,
    document.getElementById('root')
  );