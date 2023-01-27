import './App.css';
import { Card } from './components';
import { AuthProvider, CounterProvider, ModalProvider } from './contexts';

function App() {
  
  return (
    <>
      <Card />
      <CounterProvider>
        <AuthProvider>
          <ModalProvider>
            <div className="App">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </ModalProvider>
        </AuthProvider>
      </CounterProvider>
    </>
  );
}

export default App;
