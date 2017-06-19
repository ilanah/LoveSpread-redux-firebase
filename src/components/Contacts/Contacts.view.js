import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Contacts.css'
import cn from 'classnames'
import {Button,Label,Input,Form} from 'semantic-ui-react'
// import Card from '../card';

export default class Contacts extends Component {

  componentDidMount() {
    this.props.onGetContacts();
  }

  render() {
    const { contacts } = this.props;

    // Build Contacts list if contacts exist and are loaded
    const contactsList = //!isLoaded(contacts) ? 'Loading' : 
        contacts.length==0 ? 'Contacts list is empty'
        : Object.keys(contacts).map(
            (key, id) => (
                // <Card key={key} id={id} contact={contacts[key]}/>
                <div key={key} id={id}>{contacts[key].displayName}</div>
            )
          )

    return (
        <div className="ui three column grid container">
            {contactsList}
            <input type="text" ref="newContact" />
            <button onClick={this.handleAdd}>
            Add
            </button>
            
        </div>
    )
  }
}
////////////////////////////////////////
