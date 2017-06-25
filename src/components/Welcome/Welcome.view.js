import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card,Image,Icon, Label} from 'semantic-ui-react'
import cn from 'classnames'

import css from './Welcome.scss'

class Welcome extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // const { id,contact } = this.props
    return (
    <div className="pusher">

        <div className="ui vertical segment center aligned">
        <div className="ui vertical stripe segment">
            <div className="ui text container">
                <h1 className="ui  header">
                SPREAD THE LOVE
                </h1>
                <h2>Let's turn our world into a happier place, by sending positive energy to other people</h2>
                <a className="ui huge primary button" href="/#/login">Get Started <i className="right arrow icon"></i></a>
            </div>
        </div>
        </div>

        <div className="ui vertical stripe quote segment">
        <div className="ui equal width stackable internally celled grid">
            <div className="center aligned row">
            <div className="column">
                <h1><i className="heartbeat icon big"></i></h1>
                <h3>HEALTHY</h3>
                <p>Help yourself and your friends to be more healthy</p>
            </div>
            <div className="column">
                <h1><i className="users icon big"></i></h1>
                <h3>POSITIVE</h3>
                <p>Let's help the world to change from negative to positive thinking</p>
            </div>
            <div className="column">
                <h1><i className="birthday icon big"></i></h1>
                <h3>EASY</h3>
                <p>Sending good energy is a piece of cake</p>
            </div>
            </div>
        </div>
        </div>

        <div className="ui vertical stripe segment">
        <div className="ui text container center aligned">
            <h1><i className="world icon big"></i></h1>
            <h3 className="ui header">Make the world a better place</h3>
            <p>Psychological researches have proved that being or feeling lonely actually effects your health, 
            so let's help everyone by sending good energy to people </p>
            <a className="ui large button" target="_blank"
            href="http://www.slate.com/articles/health_and_science/medical_examiner/2013/08/dangers_of_loneliness_social_isolation_is_deadlier_than_obesity.html">Read More</a>
        </div>
        </div>

        <div className="ui vertical footer segment">
        <div className="ui container">
            {
            // <div className="ui stackable divided equal height stackable grid">
            //   <div className="three wide column">
            //     <h4 className="ui header">About</h4>
            //     <div className="ui link list">
            //       <a href="#" className="item">Sitemap</a>
            //       <a href="#" className="item">Contact Us</a>
            //       <a href="#" className="item">Religious Ceremonies</a>
            //       <a href="#" className="item">Gazebo Plans</a>
            //     </div>
            //   </div>
            //   <div className="three wide column">
            //     <h4 className="ui header">Services</h4>
            //     <div className="ui link list">
            //       <a href="#" className="item">Banana Pre-Order</a>
            //       <a href="#" className="item">DNA FAQ</a>
            //       <a href="#" className="item">How To Access</a>
            //       <a href="#" className="item">Favorite X-Men</a>
            //     </div>
            //   </div>
            //   <div className="seven wide column">
            //     <h4 className="ui header">Footer Header</h4>
            //     <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
            //   </div>
            // </div>
            }
            Footer
        </div>
        </div>
    </div>
    )
  }
}

Welcome.propTypes = {
//   id: PropTypes.number.isRequired,
//   contact: PropTypes.object.isRequired
}

export default Welcome
