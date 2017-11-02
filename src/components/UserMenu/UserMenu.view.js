import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Header, Button, Popup, Grid, Card,Image,Icon, Label} from 'semantic-ui-react'
import cn from 'classnames'

import css from './UserMenu.scss'

class UserMenu extends Component {
  constructor(props) {
    super(props)
      
    this.state = { 
      mood: null,
      moddName: null,
      isOpen: false
    };
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
    this.setState({ isOpen: false })
    clearTimeout(this.timeout)
  }

  toggleMood(evt) {
    this.setState({ 
      mood: evt.target.classList[0],
      moodName: evt.target.parentElement.children[0].textContent
    });
    this.timeout = setTimeout(() => {
      this.setState({ isOpen: false })
    }, 1500)
  }

  render () {
    const { isLoggedIn } = this.props;
    const {mood, moodName} = this.state;

    const moods =[
      {name: 'Love',  color: 'red',     icon: 'heart outline'},
      {name: 'Happy', color: 'orange',  icon: 'smile'},
      {name: 'Good',  color: 'yellow',  icon: 'thumbs outline up'},
      {name: 'Meh',   color: 'olive',   icon: 'meh'},
      {name: 'Tired', color: 'teal',    icon: 'thumbs outline down'},
      {name: 'Sad',   color: 'blue',    icon: 'frown'},
    ]
    const numOfColumns = 3;
    const numOfLines = parseInt(moods.length/numOfColumns);

    let moodsRows = [];
    for (let i=0; i< numOfLines; i++)
    {
        moodsRows.push(moods.slice(i*numOfColumns,(i+1)*numOfColumns));
    }

    return (         
       <Popup 
        trigger={<Icon color={mood} circular link name="user" title={moodName}></Icon>} 
        // header="I feel..." 
        hideOnScroll
        hoverable
        on="click"
        open={this.state.isOpen}
        onClose={this.handleClose}
        onOpen={this.handleOpen}
        position="bottom right"
        size="small"
        style={{marginTop: 1.5 + 'em'}}
      >
      {isLoggedIn ?
        <Grid centered padded columns={numOfColumns}>

          <Grid.Row textAlign='center' stretched>
              <Header dividing as='h3' color={mood}>I feel {moodName ? moodName : '...'}</Header>
          </Grid.Row>
          { moodsRows.map((moodRow, index) => 
                <Grid.Row key={index}>
                  { moodRow.map((mood, index) => 
                        <Grid.Column key={index} textAlign='center'>
                          <Header as='h6'>{mood.name}</Header>
                          <Icon fitted color={mood.color} size='huge' name={mood.icon} onClick={(evt) => this.toggleMood(evt)}/>
                        </Grid.Column>
                  )}
                </Grid.Row>
            )        
          }
        </Grid>
        :
        <a className="ui huge primary button" href="/#/login">Login</a> 
      }
      </Popup>
    )
  };
}

UserMenu.propTypes = {
  // id: PropTypes.number.isRequired,
  // contact: PropTypes.object.isRequired
}

export default UserMenu
