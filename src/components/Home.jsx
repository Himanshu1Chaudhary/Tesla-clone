import React from 'react'
import Section from './Section'
import car1 from '../images/model-s.jpg'
import car2 from '../images/model-y.jpg'
import car3 from '../images/model-x.jpg'
import car4 from '../images/model-3.jpg'
import solar from '../images/solar-panel.jpg'
import solar2 from '../images/solar-roof.jpg'
import accessories from '../images/accessories.jpg'

function Home() {
  return (
    <div className="conatiner">
        <Section backimg={car1} carname="MODEL S" order_one="ORDER NOW" order_two="EXISTING INVENTORY" keydown="token"/>
        <Section backimg={car2} carname="MODEL Y" order_one="ORDER NOW" order_two="EXISTING INVENTORY" keydown="token"/>
        <Section backimg={car3} carname="MODEL X" order_one="ORDER NOW" order_two="EXISTING INVENTORY" keydown="token"/>
        <Section backimg={car4} carname="MODEL 3" order_one="ORDER NOW" order_two="EXISTING INVENTORY" keydown=""/>
        <Section backimg={solar} carname="SOLAR PANEL" order_one="ORDER NOW" order_two="LEARN MORE" keydown="token"/>
        <Section backimg={solar2} carname="SOLAR PANEL" order_one="ORDER NOW" order_two="LEARN MORE" keydown="token"/>
        <Section backimg={accessories} carname="Accessories" order_one="SHOP NOW"/>
    </div>
  )
}

export default Home