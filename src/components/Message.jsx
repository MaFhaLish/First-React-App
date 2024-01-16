function Message() {
  const myName = "Todo App List";
  return <h1>{myName ? `${myName}` : "Todo App"}</h1>;
}

export default Message;
