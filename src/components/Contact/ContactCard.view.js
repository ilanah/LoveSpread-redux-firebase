import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card,Image,Icon, Label} from 'semantic-ui-react'
import cn from 'classnames'

import css from './ContactCard.scss'

class ContactCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id,contact } = this.props
    return (
    <Card  id={`div_${id}`}>
      <Image fluid src={`${contact.photo}`}/>
      <Label attached='bottom' className={`${css.contactName}`}><Icon className={`${contact.className}`}/>{contact.displayName}</Label>
    </Card>
    )
  }
}

ContactCard.propTypes = {
  id: PropTypes.number.isRequired,
  contact: PropTypes.object.isRequired
}

export default ContactCard
