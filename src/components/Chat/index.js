import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography } from '@material-ui/core'
import { commonStyles, desktopStyles, mobileStyles, TabStyles } from './styles'
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
  ...commonStyles,
  [theme.breakpoints.up('sm')]: desktopStyles,
  [theme.breakpoints.between('xs', 'sm')]: TabStyles,
  [theme.breakpoints.down('xs')]: mobileStyles
}))

const Chat = () => {

  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <div className="container">
        <div className="left">
          <div className="top">
                <Typography variant="h4">Messages (2  )</Typography>
                {/* <input type="text" placeholder="Search" />
                <a href="javascript:;" className="search"></a> */}
            </div>
          <ul className="people">
            <li className="person">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg" alt="" />
              <span className="name">Thomas Bangalter</span>
              <span className="time">2:09 PM</span>
              <span className="preview">I was wondering...</span>
            </li>
            <li className="person">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/dog.png" alt="" />
              <span className="name">Dog Woofson</span>
              <span className="time">1:44 PM</span>
              <span className="preview">I've forgotten how it felt before</span>
            </li>
            <li className="person">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/louis-ck.jpeg" alt="" />
              <span className="name">Louis CK</span>
              <span className="time">2:09 PM</span>
              <span className="preview">But we’re probably gonna need a new carpet.</span>
            </li>
            <li className="person">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/dog.png" alt="" />
              <span className="name">Dog Woofson</span>
              <span className="time">1:44 PM</span>
              <span className="preview">I've forgotten how it felt before</span>
            </li>
            <li className="person">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/louis-ck.jpeg" alt="" />
              <span className="name">Louis CK</span>
              <span className="time">2:09 PM</span>
              <span className="preview">But we’re probably gonna need a new carpet.</span>
            </li>
            <li className="person">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/bo-jackson.jpg" alt="" />
              <span className="name">Bo Jackson</span>
              <span className="time">2:09 PM</span>
              <span className="preview">It’s not that bad...</span>
            </li>
            <li className="person">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/michael-jordan.jpg" alt="" />
              <span className="name">Michael Jordan</span>
              <span className="time">2:09 PM</span>
              <span className="preview">Wasup for the third time like is
                        you blind bitch</span>
            </li>
            <li className="person">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/drake.jpg" alt="" />
              <span className="name">Drake</span>
              <span className="time">2:09 PM</span>
              <span className="preview">howdoyoudoaspace</span>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="top"><span>To: <span className="name">Dog Woofson</span></span></div>
          <div className="chat">
            <div className="conversation-start">
              <span>Today, 5:38 PM</span>
            </div>
            <div className="bubble you">
              Hello, can you hear me?
                </div>
            <div className="bubble you">
              I'm in California dreaming
                </div>
            <div className="bubble me">
              ... about who we used to be.
                </div>
            <div className="bubble me">
              Are you serious?
                </div>
            <div className="bubble you">
              I'm in California dreaming
                </div>
            <div className="bubble me">
              ... about who we used to be.
                </div>
            <div className="bubble me">
              Are you serious?
                </div>
            <div className="bubble you">
              When we were younger and free...
                </div>
            <div className="bubble you">
              I've forgotten how it felt before
                </div>
          </div>
          <div className="write">
            <a href="javascript:;" className="write-link attach"></a>
            <input type="text" />
            <a href="javascript:;" className="write-link smiley"></a>
            <a href="javascript:;" className="write-link send"></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat