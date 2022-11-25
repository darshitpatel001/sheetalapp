import React from 'react'
import './Task.css';
import menu from './Task';
import d from './Image/item-2.jpeg'

export default function Tasks() {

  return (
    
    <div>
        <section class="menu">
      {/* <!-- title --> */}
      <div class="title">
        <h2>our menu</h2>
        <div class="underline"></div>
      </div>
      {/* <!-- filter buttons --> */}
      <div class="btn-container">
         <button type="button" class="filter-btn" data-id="all">all</button>
        <button type="button" class="filter-btn" data-id="breakfast">
          breakfast
        </button>
        <button type="button" class="filter-btn" data-id="lunch">lunch</button>
        <button type="button" class="filter-btn" data-id="shakes">
          shakes
        </button> 
      </div>
      {/* <!-- menu items --> */}
      <div class="section-center">
        {/* <!-- single item --> */}
       
       {menu.map((item)=> {

                return (<article class="menu-item">
                <img src={d} alt="menu item" class="photo" />
                <div class="item-info">
                  <header>
                    <h4>{item.title}</h4>
                    <h4> {item.price}</h4>
                  </header>
                  <p class="item-text">{item.desc}</p>
                </div>
              </article>)
            })}
        
        {/* <!-- end of single item --> */}
        
      </div>
    </section>
    </div>
  )
}
