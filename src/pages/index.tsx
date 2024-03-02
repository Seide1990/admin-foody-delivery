// import Navbar from './navbar'
// import Footer from './footer'
 
export default function Layout({children}) {
  return (
    <>
      {/* <Navbar /> */}
      <h1> header</h1>
      <main>{children}</main>
      <h2> footr</h2>
      {/* <Footer /> */}
    </>
  )
}