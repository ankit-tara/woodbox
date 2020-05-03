// import {
//   secondaryDark, backgroundColor, blueText, mainText
// } from 'src/_styles/colors'

export const commonStyles = {
  card: {
    border: 'none',
    background: 'none',
    boxShadow: 'none',
    width: '324px',
    height: '310px',
    margin: '1rem 0.5rem',
    '&:hover': {
      background: '#fff',
      boxShadow: '0 14px 18px rgba(0,0,0,0.09)'
    }
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  image: {
    width: '150px',
    height: '167px',
    objectFit: 'contain'
  },
  eventName: {
    marginTop: '1rem'
  }
}

export const mobileStyles = {

}

export const TabStyles = {

}

export const desktopStyles = {

}
