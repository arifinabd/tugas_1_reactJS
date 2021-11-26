import React from 'react'
import MenuKontak from './Page/MenuKontak'
import MenuProduct from './Page/MenuProduct'
import MenuTentangKami from './Page/MenuTentangkami'
import MenuUtama from './Page/MenuUtama'

const Footer = () => {
  return (
    <div>
      <h1>Ini Halaman Untuk Footer</h1>
    </div>
  )
}

const Header = () => {
  return (
    <div>
      <h1>Ini Halaman Untuk Header</h1>
    </div>
  )
}


function App() {
  return (
    <div>
      <Header/>
      <MenuUtama/>
      <MenuProduct/>
      <MenuKontak/>
      <MenuTentangKami/>
      <Footer/>
    </div>
  );
}

export default App;
