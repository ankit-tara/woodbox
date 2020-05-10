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
  }
}

export const mobileStyles = {
  Footer:{
    marginBottom: '3.5rem'
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
  }
}

export const TabStyles = {
  Footer: {
    marginBottom: '3.5rem'
  },
}

export const desktopStyles = {
  FooterMenu:{
    '& ul': {
      paddingLeft: 0
    },
  }
}
