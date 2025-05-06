const Button = ({ children, text, color = "black" }) => {
  //이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
      //onMouseEnter={onClickButton}
      //이벤트 핸들러, 익명함수로서 설정 가능
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
