const timeAtLoad = new Date().toLocaleTimeString()

export default function Content() {
  return (
    <section className="page-panel home-panel" aria-labelledby="home-title">
      <p className="eyebrow">Lab 3 · Data Representation &amp; Querying</p>
      <h1 id="home-title">Hello World!</h1>
      <p className="lead-copy">It is {timeAtLoad}.</p>
      <p className="support-copy">This is the Lab 3 home page. Use the Read link to browse the movie data.</p>
    </section>
  )
}
