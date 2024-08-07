import './dineRestaurant.css'
import dine from '/src/img/dine.svg'
import line from '/src/img/line.svg'
import balik from '/src/img/balik.png'
import et from '/src/img/et.png'
import book from '/src/img/book.png'
import karidesFull from '/src/img/karides-full.png'
import mobileSourcedFood from '/src/img/mobile-sourced-food.png'
import mPlace from '/src/img/mplace.png'
import placeDesktop from '/src/img/place-desktop.png'
import placeTablet from '/src/img/place-tablet.png'
import sourcedFood from '/src/img/sourced-food.png'
import tabletSourcedFood from '/src/img/tablet-sourced-food.png'
import tatli from '/src/img/tatli.jpg'
import yol from '/src/img/yol.jpg'

function App() {
  return (
    <div className="container">
      {/* Header Start */}
      <div className="header" style={{ backgroundImage: `url(${karidesFull})` }}>
        <div className="header-content">
          <h1>Exquisite dining <br />since 1989</h1>
          <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
          <a href="#" className='header-btn'>BOOK A TABLE</a>
        </div>
      </div>
      {/* Header End */}

      {/* Information Start */}
      <div className="information">
        <img src={mPlace} className='place-mobile' />
        <img src={placeTablet} className='place-tablet' />
        <img src={placeDesktop} className='place-desktop' />
        <div className="information-text">
          <img src={line} />
          <h2>Enjoyable place for all the family</h2>
          <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
        </div>
      </div>

      <div className="information-next">
        <img src={mobileSourcedFood} className='chef-foto-mobile' />
        <img src={tabletSourcedFood} className='chef-foto-tablet' />
        <img src={sourcedFood} className='chef-foto-desktop' />
        <div className="information-next-text">
          <img src={line} />
          <h2>Enjoyable place for all the family</h2>
          <p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
        </div>
      </div>
      {/* Information End */}

      {/* Menu Start */}
      <div className="menu">
        <div className="menu-text">
          <img src={line} />
          <h2>A few highlights from our menu</h2>
          <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
        </div>
        <div className="menu-container">
          <div className="menu-content">
            <img src={balik} />
            <div className="menu-content-text">
              <h2>Seared Salmon Fillet</h2>
              <p>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
            </div>
          </div>
          <hr />
          <div className="menu-content">
            <img src={et} />
            <div className="menu-content-text">
              <h2>Rosemary Filet Mignon</h2>
              <p>Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
            </div>
          </div>
          <hr />
          <div className="menu-content">
            <img src={tatli} />
            <div className="menu-content-text">
              <h2>Summer Fruit Chocolate Mousse</h2>
              <p>Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Menu End */}

      {/* Reservation Start */}
      <div className="reservation" style={{ backgroundImage: `url(${book})` }}>
        <div className="reservation-content">
          <h2>Ready to make a reservation?</h2>
          <a href="#" className='reservation-btn'>BOOK A TABLE</a>
        </div>
      </div>
      {/* Reservation End */}

      {/* Footer Start */}
      <div className="footer">
        <div className="footer-content">
          <div className="footer-content-text">
            <p className='first-contact'>Marthwaite, Sedbergh <br /> Cumbria <br /> +00 44 123 4567</p>
            <p>OPEN TIMES <br /> MON - FRI: 09:00 AM - 10:00 PM <br /> SAT - SUN: 09:00 AM - 11:30 PM</p>
          </div>
        </div>
      </div>
      {/* Footer End */}

    </div>
  )
}

export default App
