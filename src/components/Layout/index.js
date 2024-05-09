// @flow
import Header from "../header"

export default function Layout({children}) {

    return (
      <>
        {/* <Navbar /> */}
       <Header/>
        <main>{children}</main>
  
      </>
    )
  }
