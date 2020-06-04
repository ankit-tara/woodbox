// import {
//   secondaryDark, backgroundColor, blueText, mainText
// } from 'src/_styles/colors'

export const commonStyles = {
  Footer:{
    padding: '2rem 0',
    backgroundColor: '#EBEEEF'
  },
  FooterMenu:{
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    '& ul':{
      listStyleType: 'none',
    },
    '& ul li':{
      marginBottom: '0.5rem'
    },
    '& ul li p':{
      color: '#002F34',
      textTransform: 'uppercase',
      fontSize: '20px',
      fontWeight: 'bold'
    },
    '& ul li a':{
      color: '#002F34',
      fontSize: '18px',
      fontWeight: '500'
    }
  },
  SocialMenu:{
    '& ul': {
      listStyleType: 'none',
      display: 'flex',
      flexWrap: 'wrap'
    },
    '& ul li': {
      marginBottom: '0.5rem'
    },
    '& ul li:first-child': {
      width: '100%'
    },
    '& ul li p': {
      color: '#002F34',
      textTransform: 'uppercase',
      fontSize: '20px',
      fontWeight: 'bold'
    },
    '& ul li a': {
      color: '#000',
      marginRight: '0.8rem',
      display: 'inline-block'
    },
    '& ul li svg': {
      width: '1.3em',
      height: '1.3em'
    }
  },
  Copyright:{
    backgroundColor: '#C2C2C2',
    padding: '1rem',
    textAlign: 'center',
    '& p':{
      color: '#000',
      fontWeight: '500'
    }
  },
  downloadApp: {
    padding: "3rem 0",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      background: "rgba(235, 238, 239, 0.6)",
      zIndex: "1",
    },
  },
  downloadTitle: {
    position: "relative",
    zIndex: "2",
    marginLeft: "auto",
    "& h3": {
      color: "#2A66EA",
    },
  },
  downloadContent: {
    margin: "0 auto",
    position: "relative",
    zIndex: "2",
    width: "max-content",
    "& h5": {
      marginBottom: "1rem",
      textAlign: "center",
    },
  },
  downloadLinks: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& a": {
      width: "48%",
    },
    "& img": {
      width: "100%",
    },
  }
}

export const mobileStyles = {
  Copyright:{
    marginBottom: '3.5rem',
    '& p': {
      fontSize: '14px'
    }
  },
  FooterMenu: {
    '& ul': {
      paddingLeft: '1rem',
      width: '100%'
    },
  },
  SocialMenu: {
    '& ul': {
      paddingLeft: '1rem'
    }
  },
  downloadTitle: {
    "& h3": {
      marginBottom: "2rem",
      textAlign: "center",
    },
  },
  downloadLinks: {
    "& img": {
      width: "100px",
    },
  }
}

export const TabStyles = {
  Copyright: {
    marginBottom: '3.5rem'
  },
}

export const desktopStyles = {
  FooterMenu:{
    '& ul': {
      paddingLeft: 0
    },
  },
  downloadTitle: {
    width: "50%",
  },
}
