import Navbar from './components/Navbar';
import TravelCard from './components/TravelCard';
import Footer from './components/Footer';
import data from './data';
import "./style.css";

const cards = data.map(card => {
  return <TravelCard key={card.id} {...card} />
})


function App() {
  return (
    <div>
      <Navbar />
      <section className='container'>
        {cards}
     </section>
     <Footer />
    </div>
    
  );
  
}

export default App;
