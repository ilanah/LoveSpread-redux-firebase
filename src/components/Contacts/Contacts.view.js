import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Contacts.css'
import cn from 'classnames'
import {Container, Header, Card} from 'semantic-ui-react'
import ContactCard from '../Contact/ContactCard.view';

export default class Contacts extends Component {

  componentDidMount() {
    this.props.onGetContacts();
  }

  render() {
    const { contacts, msg } = this.props;

    // Build Contacts list if contacts exist and are loaded
    const contactsList = //!isLoaded(contacts) ? 'Loading' : contacts.length==0 ? [] :
        Object.keys(contacts).map(
            (key, id) => (
                <ContactCard key={key} id={id} contact={contacts[key]}/>
                // <div key={key} id={id}>{contacts[key].displayName}</div>
            )
          )

    return (
        // <div className="ui three column grid padded">
        // <Grid columns={3}>
        // <Grid.Row>
        // </Grid.Row>
        // <Grid.Row>
        // </Grid.Row>
        // </Grid>
        <Container fluid>
          <Header className="row" as="h5" dividing>{msg}</Header>
          <Card.Group itemsPerRow={3}>
            {contactsList}
          </Card.Group>
        </Container>
        // {
          /**
            <Input type="text" ref="newContact" />
            <Button onClick={this.handleAdd}>
            Add
            </Button>
           */
        // }
    )
  }
}
////////////////////////////////////////
