import React from 'react'
import SideNav from './SideNav'
import BodyContent from './BodyContent'

export default function Body() {
  return (
    <section className='flex'>
        <SideNav/>
        <BodyContent/>
    </section>
  )
}
