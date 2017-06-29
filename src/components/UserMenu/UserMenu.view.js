import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card,Image,Icon, Label} from 'semantic-ui-react'
import cn from 'classnames'

import css from './UserMenu.scss'

class UserMenu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id,contact } = this.props
    return (
      <div class="aside flex column ">
        <div class="flex row button btn-red">
        <span class="center red">&nbsp;</span>
        </div>
        <div class="flex row button btn-orange">
          <span class="center orange">&nbsp;</span>
        </div>
        <div class="flex row button btn-yellow"><span class="center yellow">&nbsp;</span></div>
        <div class="flex row button btn-green">
        <span class="center green">&nbsp;</span></div>
        <div class="flex row button btn-blue">
        <span class="center blue">&nbsp;</span>
        </div>
      </div>
/*
    <Card  id={`div_${id}`}>
      <Image fluid src={`${contact.photo}`}/>
      <Label attached='bottom' className={`${css.contactName}`}><Icon className={`${contact.className}`}/>{contact.displayName}</Label>
    </Card>
*/
    )
  }
}

UserMenu.propTypes = {
  // id: PropTypes.number.isRequired,
  // contact: PropTypes.object.isRequired
}

export default UserMenu
