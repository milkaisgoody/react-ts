import './App.css'
import Greet from './components/Greet'
import Greet2 from './components/Greet2'

function App() {

  //함수 정의 - 
  const doClick = () => {
    alert("안녕하세요~");
  }

  return (
    <>
      <section className="app">
          <h2>리엑트 기초 문법(Typescript)</h2>
          {/*<Greet 
            name="도경수"
            age={33}
          />*/}
          <Greet2 
            name="도경수"
            age={33}
            doClick={doClick}
          />
      </section>
    </>
  )
}

export default App
