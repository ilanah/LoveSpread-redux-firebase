import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card,Image,Icon, Label} from 'semantic-ui-react'
import cn from 'classnames'

import css from './MainButton.scss'

class MainButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // const { id,contact } = this.props
    return (
    <div class={`${css.myMainButton}`}>
        <div class={`${css.btn} ${css.uiDraggable} ${css.hasEnergy}`}>
Good 
Energy</div>
    </div>
    //   className={`${css.contactName}`}
    )
  }
}

MainButton.propTypes = {
//   id: PropTypes.number.isRequired,
//   contact: PropTypes.object.isRequired
}

export default MainButton
