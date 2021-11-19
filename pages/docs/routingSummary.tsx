function RoutingSummary() {
  return(
    <>
      <h1>Routing Summary</h1>
      <div>
        <p>1. Page based routing mechanism - Pages are associated with a route based on their file name.</p>
        <p>2.Nested routes - Nested folder structure, files witll be automatically routed in the same way in the URL</p>
        <p>3.Dynamic routes - Can be created by adding square brackets to a page name</p>
        <p>4.Catch all routes - Add three dots inside square brackets to create a catch all route.
          Helpful when you watn different URLs for the same page layout or even when 
          you&apos;re working with pages where some of the route parameters are optional
        </p>
        <p>5.Link component to navigate on click of an element</p>
      </div>
    </>
  )
}

export default RoutingSummary