import { Link, Route, Routes } from 'react-router-dom'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'
import NavigationBar from './components/NavigationBar.jsx'
import Create from './pages/Create.jsx'
import Read from './pages/Read.jsx'
import './App.css'

export default function App() {
  return (
    <div className="app-shell">
      <NavigationBar />
      <main className="app-main container">
        <Routes>
          <Route path="/" element={<Content />} />
          {/* Exercise 1: route the navigation links to separate Read and Create components. */}
          <Route path="/read" element={<Read />} />
          <Route path="/create" element={<Create />} />
          <Route
            path="*"
            element={(
              <section className="page-panel" aria-labelledby="not-found-title">
                <p className="eyebrow">404 · Page not found</p>
                <h1 id="not-found-title">That page does not exist.</h1>
                <Link className="btn btn-primary mt-2" to="/">Return home</Link>
              </section>
            )}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
