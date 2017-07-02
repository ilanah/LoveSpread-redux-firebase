import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card,Image,Icon, Label} from 'semantic-ui-react'
import cn from 'classnames'

import css from './MainButton.scss'

class ContactCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id,contact } = this.props
    return (
    <div class="myMainButton center flex">
        <div class="btn ui-draggable hasEnergy ui-widget-content">
Good 
Energy</div>
    </div>
    //   className={`${css.contactName}`}
    )
  }
}

ContactCard.propTypes = {
  id: PropTypes.number.isRequired,
  contact: PropTypes.object.isRequired
}

export default ContactCard
