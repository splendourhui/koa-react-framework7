
"use strict";

import React from 'react';

class Tab1 extends React.Component {
  render() {
    return (
      <div className='contact-list contact-content'>
        <div className='list-block contacts-block'>
          <div className='list-group'>
            <ul>
              <li className='list-group-title'>K</li>
              <li>
                <a href="pages/message?title=Kate" className='item-link item-content'>
                  <div className='item-inner'>
                    <div className='item-title'>Kate</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="pages/message?title=Kitty" className='item-link item-content'>
                  <div className='item-inner'>
                    <div className='item-title'>Kitty</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Tab1;
