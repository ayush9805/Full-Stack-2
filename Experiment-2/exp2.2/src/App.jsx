import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <>
     

      {/* Cards Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Popular Travel Destinations</h2>

        <div className="row">

          {/* Paris */}
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
                className="card-img-top"
                alt="Paris"
              />
              <div className="card-body">
                <h5 className="card-title">Paris, France</h5>
                <p className="card-text">
                  The city of love, known for the Eiffel Tower, art, and culture.
                </p>
                <a href="#" className="btn btn-primary">Explore</a>
              </div>
            </div>
          </div>

          {/* Bali */}
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                className="card-img-top"
                alt="Bali"
              />
              <div className="card-body">
                <h5 className="card-title">Bali, Indonesia</h5>
                <p className="card-text">
                  Famous for beaches, temples, and tropical vibes.
                </p>
                <a href="#" className="btn btn-primary">Explore</a>
              </div>
            </div>
          </div>

          {/* New York */}
          <div className="col-md-4">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1588384153148-ebd739ac430c"
                className="card-img-top"
                alt="New York"
              />
              <div className="card-body">
                <h5 className="card-title">New York, USA</h5>
                <p className="card-text">
                  The city that never sleeps, full of life and skyscrapers.
                </p>
                <a href="#" className="btn btn-primary">Explore</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
