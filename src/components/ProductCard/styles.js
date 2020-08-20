// import {
//   secondaryDark, backgroundColor, blueText, mainText
// } from 'src/_styles/colors'

export const commonStyles = {
  card: {
    border: '#D6D6D6 solid 4px',
    boxShadow: 'none',
    width: 'auto',
    maxWidth: '100%',
    margin: '1rem 1rem 1rem 0'
  },
  Orangecard:{
    border: 'solid 4px #FC821A'
  },
  cardInner:{
    height: '340px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0.7rem 1rem !important'
  },
  cardHead: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem'
  },
  title: {
    flex: '0 0 80%',
    textAlign: 'left',
    fontSize: '1.35rem',
    fontWeight: '500'
  },
  image: {
    width: 'auto',
    height: '140px',
    objectFit: 'contain'
  },
  cardBody: {
    textAlign: 'center'
  },
  cardFooter: {
    display: 'flex'
  },
  left: {
    flex: '0 0 70%'
  },
  right: {
    flex: '0 0 30%',
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'space-around',
    overflow: 'hidden'
  },
  price:{
    fontSize: '1.5rem',
    fontWeight: '600',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  Orangeprice:{
    color: '#FC821A'
  },
  date:{
    fontSize: '0.8rem'
  },
  college:{
    fontSize: '0.8rem',
    color: '#4A4A4A',
    marginTop: '0.2rem'
  },
  excerpt:{
    fontSize: '1rem',
    color: '#4A4A4A'
  }
}

export const mobileStyles = {
  title:{
    fontSize: '1rem'
  },
  excerpt:{
    fontSize: '14px'
  },
  cardFooter:{
    marginTop: '1rem'
  }
}

export const TabStyles = {

}

export const desktopStyles = {

}
