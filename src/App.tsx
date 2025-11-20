import Hero from './components/Hero';
import Mission from './components/Mission';
import Impact from './components/Impact';
import Stories from './components/Stories';
import GetInvolved from './components/GetInvolved';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Mission />
      <Impact />
      <Stories />
      <GetInvolved />
      <Footer />
    </div>
  );
}

export default App;
