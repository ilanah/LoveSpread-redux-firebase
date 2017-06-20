import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card,Image,Icon, Label} from 'semantic-ui-react'
import cn from 'classnames'

import css from './ContactCard.css'

class ContactCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id,contact } = this.props
    // const color=selectedColor==null?'red':selectedColor
    /*
    <div className="column">
      <div className="ui fluid card" id={`div_${id}`}>
        <div className="image">
          <Image src={`${contact.photo}`}/>
        </div>
        <a className="ui right corner label">
          <Icon className={`${contact.className}`}/>
        </a>
        <div className="content">
          <a className="ui small header ellipsis">
            {contact.displayName} 
          </a>
        </div>
      </div>
    </div>*/
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
