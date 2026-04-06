function PostData() {

  const sendData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",   // 👈 data anuppuradhu
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "Muthu",
        body: "Hello World",
        userId: 1
      })
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  return (
    <>
      <button onClick={sendData}>Send Data</button>
    </>
  );
}

export default PostData;