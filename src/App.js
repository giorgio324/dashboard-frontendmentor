import './App.css';
import User from './components/User';
import Activities from './components/Activities';
function App() {
  return (
    <main className='main-container'>
      <section className='dashboard'>
        <User></User>
        <Activities></Activities>
      </section>
    </main>
  );
}

export default App;
