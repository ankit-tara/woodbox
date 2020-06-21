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
    <div class={classes.wrapper}>
      <div class="container">
        <div class="left">
          {/* <div class="top">
                <input type="text" placeholder="Search" />
                <a href="javascript:;" class="search"></a>
            </div> */}
          <ul class="people">
            <li class="person">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg" alt="" />
              <span class="name">Thomas Bangalter</span>
              <span class="time">2:09 PM</span>
              <span class="preview">I was wondering...</span>
            </li>
            <li class="person">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/dog.png" alt="" />
              <span class="name">Dog Woofson</span>
              <span class="time">1:44 PM</span>
              <span class="preview">I've forgotten how it felt before</span>
            </li>
            <li class="person">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/louis-ck.jpeg" alt="" />
              <span class="name">Louis CK</span>
              <span class="time">2:09 PM</span>
              <span class="preview">But we’re probably gonna need a new carpet.</span>
            </li>
            <li class="person">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/bo-jackson.jpg" alt="" />
              <span class="name">Bo Jackson</span>
              <span class="time">2:09 PM</span>
              <span class="preview">It’s not that bad...</span>
            </li>
            <li class="person">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/michael-jordan.jpg" alt="" />
              <span class="name">Michael Jordan</span>
              <span class="time">2:09 PM</span>
              <span class="preview">Wasup for the third time like is
                        you blind bitch</span>
            </li>
            <li class="person">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/drake.jpg" alt="" />
              <span class="name">Drake</span>
              <span class="time">2:09 PM</span>
              <span class="preview">howdoyoudoaspace</span>
            </li>
          </ul>
        </div>
        <div class="right">
          <div class="top"><span>To: <span class="name">Dog Woofson</span></span></div>
          <div class="chat">
            <div class="conversation-start">
              <span>Today, 5:38 PM</span>
            </div>
            <div class="bubble you">
              Hello, can you hear me?
                </div>
            <div class="bubble you">
              I'm in California dreaming
                </div>
            <div class="bubble me">
              ... about who we used to be.
                </div>
            <div class="bubble me">
              Are you serious?
                </div>
            <div class="bubble you">
              When we were younger and free...
                </div>
            <div class="bubble you">
              I've forgotten how it felt before
                </div>
          </div>
          <div class="write">
            <a href="javascript:;" class="write-link attach"></a>
            <input type="text" />
            <a href="javascript:;" class="write-link smiley"></a>
            <a href="javascript:;" class="write-link send"></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat