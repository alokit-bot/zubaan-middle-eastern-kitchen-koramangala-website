import React from 'react';
import { createRoot } from 'react-dom/client';
import { MapPin, Phone, Star, Clock, BookOpen, Coffee, Flame, Utensils, Navigation, Sparkles } from 'lucide-react';
import './styles.css';

const phone = '+917760040004';
const mapsUrl = 'https://www.google.com/maps/place/?q=place_id:ChIJax-8obcVrjsRePwZioFVZfs';

const images = {
  hero: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=85',
  mezze: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=900&q=80',
  table: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80',
  tea: 'https://images.unsplash.com/photo-1513135557534-682d53fd7046?auto=format&fit=crop&w=900&q=80',
  dessert: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=900&q=80'
};

function App() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#home" aria-label="Zubaan home"><span>Z</span> Zubaan</a>
        <nav aria-label="Primary navigation">
          <a href="#about">Story</a>
          <a href="#flavours">Flavours</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="navCta" href={`tel:${phone}`}>Call to Book</a>
      </header>

      <section id="home" className="hero">
        <div className="heroBg" style={{ backgroundImage: `url(${images.hero})` }} />
        <div className="heroOverlay" />
        <div className="heroContent reveal">
          <p className="eyebrow"><Sparkles size={16}/> Koramangala 6th Block · West Asian Kitchen</p>
          <h1>Middle Eastern warmth in the heart of Koramangala</h1>
          <p className="lead">Mezze, grills, manakish, desserts and tea served in a candlelit, book-lined neighbourhood space made for slow conversations.</p>
          <div className="heroBadges" aria-label="Quick business facts">
            <span><Star size={18} fill="currentColor"/> 4.3 Google rating</span>
            <span><Clock size={18}/> 12 PM – 12 AM daily</span>
            <span><MapPin size={18}/> 17th G Main Road</span>
          </div>
          <div className="actions">
            <a className="button primary" href={`tel:${phone}`}><Phone size={18}/> Call to Book</a>
            <a className="button secondary" href={mapsUrl} target="_blank" rel="noreferrer"><Navigation size={18}/> Get Directions</a>
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="sectionText reveal">
          <p className="eyebrow">Kahwa · Kitaab · Conversation</p>
          <h2>A calm table for bold flavours</h2>
          <p>Zubaan brings Middle Eastern and West Asian flavours to Koramangala with the comfort of a neighbourhood dining room. Public listings and editorial coverage point to a place shaped by mezze platters, kebabs, manakish, tea, books, ghazals and a slower evening rhythm.</p>
          <p>The experience is intimate rather than noisy: warm lamps, old-world textures, fresh plates to share, and enough space for a proper conversation.</p>
        </div>
        <div className="aboutCard reveal">
          <BookOpen className="cardIcon" />
          <h3>Built around conversation</h3>
          <p>A home-like setting for dinner, reading, tea and the kind of table talk that lingers after dessert.</p>
        </div>
      </section>

      <section className="experience section">
        <div className="sectionHead reveal">
          <p className="eyebrow">The experience</p>
          <h2>What Zubaan is known for</h2>
        </div>
        <div className="cards">
          <Feature icon={<Utensils />} title="Mezze & dips" text="Hummus, mutabbal, baba ganoush, labneh garlic, tabouleh and fattoush with pita-style sharing plates." />
          <Feature icon={<Flame />} title="Grills & manakish" text="Mixed grill, shish tawook, kebabs, grilled wings and zaatar-cheese manakish inspired by public menu mentions." />
          <Feature icon={<Coffee />} title="Desserts & tea" text="Baklava, kunafa, bread pudding, lemon dessert, coffee, tea, kahwa and Saudi champagne-style refreshers." />
          <Feature icon={<BookOpen />} title="Candlelit conversations" text="A literary, ghazal-soundtracked ambience with books, warm lamps and indoor/outdoor seating." />
        </div>
      </section>

      <section id="flavours" className="section flavours">
        <div className="flavourGrid">
          <Dish image={images.mezze} title="Cold mezze table" text="Creamy, smoky and fresh dips for sharing, built around hummus, baba ganoush, labneh and bright salads." />
          <Dish image={images.table} title="Grills from the flame" text="Chicken, lamb and mixed-grill style plates with pita, pickles and garlic-forward sauces." />
          <Dish image={images.tea} title="Tea, kahwa & coffee" text="Hot drinks for long evenings, solo dates, reading corners and after-dinner conversations." />
          <Dish image={images.dessert} title="Baklava & kunafa notes" text="Sweet endings with Middle Eastern dessert cues, from syrupy pastry to warm cheese-and-kataifi comfort." />
        </div>
        <div className="priceNote reveal">Public listings indicate a broad range of ₹400 – ₹1,400 per person.</div>
      </section>

      <section className="section ambience">
        <div className="ambienceText reveal">
          <p className="eyebrow">Ambience</p>
          <h2>Lanterns, books, ghazals and a quiet Koramangala corner</h2>
          <p>Think sand-toned walls, brass highlights, mosaic-inspired details and candlelit tables. The website mirrors that atmosphere with soft movement, arched frames and warm editorial imagery.</p>
        </div>
        <div className="mosaic" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
      </section>

      <section id="visit" className="section visit">
        <div className="visitPanel reveal">
          <p className="eyebrow">Visit Zubaan</p>
          <h2>465/C, 17th G Main Road</h2>
          <p>6th Block, Koramangala, Bengaluru, Karnataka 560095</p>
          <div className="visitFacts">
            <span><Clock size={18}/> Open daily · 12:00 PM – 12:00 AM</span>
            <span><Star size={18} fill="currentColor"/> 4.3 rating · 900+ reviews</span>
            <span><Utensils size={18}/> Delivery · Takeaway · Booking · Outdoor seating</span>
          </div>
          <div className="actions">
            <a className="button primary" href={`tel:${phone}`}><Phone size={18}/> +91 77600 40004</a>
            <a className="button secondary dark" href={mapsUrl} target="_blank" rel="noreferrer"><MapPin size={18}/> Open in Maps</a>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <strong>Zubaan - Middle-Eastern Kitchen</strong>
          <p>Middle Eastern / West Asian restaurant · Koramangala</p>
        </div>
        <div className="footerLinks">
          <a href="#about">Story</a>
          <a href="#flavours">Flavours</a>
          <a href={`tel:${phone}`}>Call</a>
          <a href={mapsUrl} target="_blank" rel="noreferrer">Directions</a>
        </div>
      </footer>
    </main>
  );
}

function Feature({ icon, title, text }) {
  return <article className="feature reveal"><div className="featureIcon">{icon}</div><h3>{title}</h3><p>{text}</p></article>;
}

function Dish({ image, title, text }) {
  return <article className="dish reveal"><img src={image} alt="" loading="lazy"/><div><h3>{title}</h3><p>{text}</p></div></article>;
}

createRoot(document.getElementById('root')).render(<App />);
