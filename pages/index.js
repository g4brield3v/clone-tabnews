const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray', 'black'];

function Home() {
    for (let cor of colors) {
        return (<div key={cor} style={{ backgroundColor: cor, width: '100px', height: '100px' }}></div>)
    }
}

export default Home;