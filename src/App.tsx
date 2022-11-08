import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AppProvider } from './context/AppContext';
import Viewport from './components/Viewport';

function App() {
  const style = {
    backgroundImage: `url("./media/4.png")`,
    height: '100vh',
    margin: '0',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 100%',
  };

  return (
    <div
      className='App d-flex justify-content-center'
      style={style}
    >
      <AppProvider>
        <Viewport />
      </AppProvider>
    </div>
  );
}

export default App;
