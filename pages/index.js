const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray', 'black'];

function Home() {
  function changeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }

  return (
    <main>
      <button type="button" onClick={changeBackgroundColor}>
        Mudar cor do fundo
      </button>
    </main>
  );
}

export default Home;