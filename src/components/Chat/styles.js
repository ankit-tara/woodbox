export const commonStyles = {
  wrapper: {
    marginBottom: '40px',
    position: "relative",
    left: "50%",
    width: "var(--wrapper)",
    height: "calc(100vh - 150px)",
    minHeight: '400px',
    WebkitTransform: "translate(-50%, 0)",
    transform: "translate(-50%, 0)",
    marginTop: '0.3rem',
    "& .container": {
      position: "relative",
      backgroundColor: "var(--white)",
      height: '100%',
      overflow: 'hidden'
    },
    "& .container .left": {
      float: "left",
      width: "37.6%",
      height: "100%",
      border: "1px solid var(--light)",
      backgroundColor: "var(--white)",
      overflow: 'hidden',
    },
    "& .container .left .top": {
      position: "relative",
      width: "100%",
      height: "96px",
      padding: "29px"
    },
    "& .container .left .top:after": {
      position: "absolute",
      bottom: "0",
      left: "50%",
      display: "block",
      width: "80%",
      height: "1px",
      content: "''",
      backgroundColor: "var(--light)",
      WebkitTransform: "translate(-50%, 0)",
      transform: "translate(-50%, 0)"
    },
    "& .container .left input": {
      float: "left",
      width: "188px",
      height: "42px",
      padding: "0 15px",
      border: "1px solid var(--light)",
      backgroundColor: "#eceff1",
      borderRadius: "21px",
      fontFamily: "'Source Sans Pro', sans-serif",
      fontWeight: "400"
    },
    "& .container .left input:focus": { outline: "none" },
    "& .container .left a.search": {
      display: "block",
      float: "left",
      width: "42px",
      height: "42px",
      marginLeft: "10px",
      border: "1px solid var(--light)",
      backgroundColor: "var(--blue)",
      backgroundImage:
        'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/name-type.png")',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top 12px left 14px",
      borderRadius: "50%"
    },
    "& .container .left .people": {
      marginLeft: "-1px",
      borderRight: "1px solid var(--light)",
      borderLeft: "1px solid var(--light)",
      width: "calc(100% + 2px)",
      height: 'calc(100% - 100px)',
      padding: "0",
      listStyle: 'none',
      overflowY: 'auto',
      overflowX: 'hidden'
    },
    "& .container .left  .unread-box": {
      background: '#f7812a',
      borderRadius: '50%',
      padding: '5px',
      fontSize: '9px',
      display: 'inline-block',
      width: '20px',
      background: '#010101',
      color: '#fff',
      textAlign: 'center'
    },
    "& .container .left .people .person": {
      position: "relative",
      width: "100%",
      padding: "12px 30px 16px",
      cursor: "pointer",
      backgroundColor: "var(--white)",
      display: 'flex'
    },
    "& .container .left .people .person:after": {
      position: "absolute",
      bottom: "0",
      left: "50%",
      display: "block",
      width: "80%",
      height: "1px",
      content: "''",
      backgroundColor: "var(--light)",
      WebkitTransform: "translate(-50%, 0)",
      transform: "translate(-50%, 0)"
    },
    "& .container .left .people .person img": {
      float: "left",
      width: "40px",
      height: "40px",
      marginRight: "12px",
      borderRadius: "50%"
    },
    "& .container .left .people .person .imgRight": {
      display: 'flex',
      flexWrap: 'wrap',
      width: 'calc(100% - 50px)'
    },
    "& .container .left .people .person .name": {
      fontSize: "14px",
      lineHeight: "22px",
      color: "var(--dark)",
      fontFamily: "'Source Sans Pro', sans-serif",
      fontWeight: "600",
      width: '100%'
    },
    "& .container .left .people .person .time": {
      fontSize: "14px",
      position: "absolute",
      top: "16px",
      right: "10%",
      padding: "0 0 5px 5px",
      color: "var(--grey)",
      // backgroundColor: "var(--white)"
    },
    "& .container .left .dialog-loader": {
      textAlign: 'center',
      padding: '10px',
    },
    "& .container .left .people .person .preview": {
      fontSize: "14px",
      display: "inline-block",
      overflow: "hidden !important",
      width: "calc(100% - 25px)",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      color: "var(--grey)"
    },
    "& .container .left .people .person.active, & .container .left .people .person:hover": {
      marginTop: "-1px",
      marginLeft: "-1px",
      paddingTop: "13px",
      border: "0",
      backgroundColor: "var(--grey)",
      width: "calc(100% + 2px)",
      paddingLeft: "calc(10% + 1px)"
    },
    "& .container .left .people .person.active span, & .container .left .people .person:hover span": {
      color: "var(--white)",
      background: "transparent"
    },
    "& .container .left .people .person.active:after, & .container .left .people .person:hover:after": {
      display: "none"
    },
    "& .container .left .people .person.active, & .container .left .people .person.selected": {
      marginTop: "-1px",
      marginLeft: "-1px",
      paddingTop: "13px",
      border: "0",
      backgroundColor: "var(--blue)",
      width: "calc(100% + 2px)",
      paddingLeft: "calc(10% + 1px)"
    },
    "& .container .left .people .person.active span, & .container .left .people .person.selected span": {
      color: "var(--white)",
      // background: "transparent"
    },
    "& .container .left .people .person.active:after, & .container .left .people .person.selected:after": {
      display: "none"
    },
    "& .container .right": {
      position: "relative",
      float: "left",
      width: "62.4%",
      height: "100%"
    },
    "& .container .right .top": {
      width: "100%",
      height: "100px",
      padding: "15px 29px",
      backgroundColor: "#eceff1",
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    "& .container .right .top p": {
      margin: '5px 0 10px',
      width: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    "& .container .right .top p a": {
      color: '#519f3f'
    },
    "& .container .right .top span": { fontSize: "15px", color: "var(--grey)" },
    "& .container .right .top span .name": {
      color: "var(--dark)",
      fontFamily: "'Source Sans Pro', sans-serif",
      fontWeight: "600"
    },
    "& .container .emptyDialog img": {
      height: '100px'

    },
    "& .container .emptyDialog": {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'gray',
    },
    "& .container .right .chat": {
      position: "relative",
      // display: "flex",
      overflow: "auto",
      padding: "0 35px 92px",
      borderWidth: "1px 1px 1px 0",
      borderStyle: "solid",
      borderColor: "var(--light)",
      // height: "80%",
      height: "calc(100% - 100px)",
      WebkitBoxPack: "end",
      justifyContent: "flex-end",
      WebkitBoxOrient: "vertical",
      WebkitBoxDirection: "normal",
      flexDirection: "column"
    },
    "& .container .right::before": {
      content: '""',
      height: '46px',
      width: '97%',
      background: '#fff',
      bottom: '2px',
      left: 0,
      position: 'absolute',
      zIndex: '1',
    },
    "& .container .right .write": {
      position: "absolute",
      bottom: "20px",
      zIndex: '2',
      left: "30px",
      height: "42px",
      paddingLeft: "8px",
      border: "1px solid var(--light)",
      backgroundColor: "#eceff1",
      width: "calc(100% - 58px)",
      borderRadius: "5px"
    },
    "& .container .right .write input": {
      fontSize: "16px",
      float: "left",
      width: "80%",
      height: "40px",
      padding: "0 10px",
      color: "var(--dark)",
      border: "0",
      outline: "none",
      backgroundColor: "#eceff1",
      fontFamily: "'Source Sans Pro', sans-serif",
      fontWeight: "400"
    },
    "& .container .right .write .write-link.attach:before": {
      display: "inline-block",
      float: "left",
      width: "20px",
      height: "42px",
      content: "''",
      backgroundImage:
        'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/attachment.png")',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    },
    "& .container .right .write .write-link.smiley:before": {
      display: "inline-block",
      float: "left",
      width: "20px",
      height: "42px",
      content: "''",
      backgroundImage:
        'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/smiley.png")',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    },
    "& .container .right .write .write-link.send:before": {
      display: "inline-block",
      float: "left",
      width: "20px",
      height: "42px",
      marginLeft: "11px",
      content: "''",
      backgroundImage:
        'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/send.png")',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    },
    "& .container .right .bubble .time": {
      fontSize: '10px',
      color: 'gray'
    },
    "& .container .right .bubble.me .time": {
      fontSize: '10px',
      color: 'gray'
    },
    "& .container .right .bubble.you .time": {
      fontSize: '10px',
      color: '#fff'
    },
    "& .container .right .bubble": {
      fontSize: "16px",
      position: "relative",
      // display: "inline-block",
      clear: "both",
      marginBottom: "8px",
      padding: "13px 14px",
      verticalAlign: "top",
      borderRadius: "5px",
      display: 'flex',
      flexDirection: "column"
    },
    "& .container .right .bubble:before": {
      position: "absolute",
      top: "19px",
      display: "block",
      width: "8px",
      height: "6px",
      content: "'\\00a0'",
      WebkitTransform: "rotate(29deg) skew(-35deg)",
      transform: "rotate(29deg) skew(-35deg)"
    },
    "& .container .right .bubble.you": {
      float: "left",
      color: "var(--white)",
      backgroundColor: "var(--blue)",
      alignSelf: "flex-start",
      WebkitAnimationName: "slideFromLeft",
      animationName: "slideFromLeft"
    },
    "& .container .right .bubble.you:before": {
      left: "-3px",
      backgroundColor: "var(--blue)"
    },
    "& .container .right .bubble.me": {
      float: "right",
      color: "var(--dark)",
      backgroundColor: "#eceff1",
      alignSelf: "flex-end",
      WebkitAnimationName: "slideFromRight",
      animationName: "slideFromRight"
    },
    "& .container .right .bubble.me:before": {
      right: "-3px",
      backgroundColor: "#eceff1"
    },
    "& .container .right .conversation-start": {
      position: "relative",
      width: "100%",
      marginBottom: "27px",
      textAlign: "center"
    },
    "& .container .right .conversation-start span": {
      fontSize: "14px",
      display: "inline-block",
      color: "var(--grey)"
    },
    "& .container .right .conversation-start span:before, & .container .right .conversation-start span:after": {
      position: "absolute",
      top: "10px",
      display: "inline-block",
      width: "30%",
      height: "1px",
      content: "''",
      backgroundColor: "var(--light)"
    },
    "& .container .right .conversation-start span:before": { left: "0" },
    "& .container .right .conversation-start span:after": { right: "0" }
  }
}

export const desktopStyles = {

}
export const tabStyles = {
  backBtn: {
    display: 'none'
  }
}

export const mobileStyles = {
  wrapper: {
    marginTop: '0',
    width: '100%',
    height: 'calc(100vh - 117px)',
    "& .container .right": {
      width: '100%'
    },
    "& .container .left": {
      width: '100%',
      position: 'absolute',
      zIndex: 9,
      transform: 'translateX(0)',
      transition: 'transform ease-in-out 450ms',
    },
    "& .container .left.active": {
      transform: 'translateX(-100%)',
      transition: 'transform ease-in-out 450ms',
    },
    "& .container .right .write": {
      display: 'flex'
    },
    "& .container .right .top": {
      // display: 'flex'
    }
  },
  backBtn: {
    marginRight: '1rem'
  },
  flex: {
    display: 'flex'
  }
}