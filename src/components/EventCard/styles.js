// import {
//   secondaryDark, backgroundColor, blueText, mainText
// } from 'src/_styles/colors'

export const commonStyles = {
  card: {
    border: 'none',
    boxShadow: '0 14px 18px rgba(0,0,0,0.09)',
    width: '330px',
    margin: '1rem 0.5rem',
    display: 'grid'
  },
  cardInner: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0.7rem 1rem 1rem !important',
    border: '#D6D6D6 solid 4px',
    borderTop: 'none'
  },
  Orangecard: {
    border: 'solid 4px #FC821A',
    borderTop: 'none'
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    flex: '0 0 80%',
    textAlign: 'left',
    fontSize: '1.5rem',
    fontWeight: '500'
  },
  image: {
    width: '100%',
    height: '330px',
    objectFit: 'cover'
  },
  cardBody: {
    marginTop: '1rem',
    paddingTop: '1rem',
    borderTop: '#C8C8C8 solid 1px'
    // textAlign: 'center'
  },
  cardFooter: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  price: {
    fontSize: '1.5rem',
    fontWeight: '600'
  },
  Orangeprice: {
    color: '#FC821A'
  },
  date: {
    fontSize: '1rem'
  },
  college: {
    fontSize: '1rem',
    color: '#4A4A4A',
    marginTop: '0.2rem',
    fontStyle: 'italic'
  },
  excerpt: {
    fontSize: '1rem',
    color: '#4A4A4A',
    marginBottom: '1rem'
  }
}

export const mobileStyles = {

}

export const TabStyles = {

}

export const desktopStyles = {

}
