

function PreRendering() {
  return(
    <>
      <h1>Pre-rendering in Next JS</h1>
      <div>
        <h2>Static Generation.</h2>
        <p>A method of pre-rendering where the HTML pages are generated at build time</p>
        <p>The HTML with all the data that makes up the content of the web page are generated in advance
          whenyou build your appplication
        </p>
        <p>Ex: Blog pages, e-commerce Product pages, documentaiont and marketing pages </p>
          <h3>Static Generation - HOW?</h3>
          <p>Next JS, by default will pre-render every page in our app</p>
          <p>The HTML for every page will automatically be statically generated when we build our application </p>
          <p>Next JS, by default, without any configuration, statically generates every page in our app when we build
            it for production. THis allows the page to be cached by a CDN and indexedd by a search engin.</p>
        <h2>Server-side Rendering</h2>
      </div>
    </>
  )
}

export default PreRendering