const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray', 'black'];

function Home() {
  function changeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }

  return (
    <main>
      <button type="button" onClick={changeBackgroundColor}>
        Clique aqui para mudar a cor de fundo
      </button>
    </main>
  );
}

export default Home;