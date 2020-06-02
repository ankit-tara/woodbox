export const commonStyles = {
  card: {
    border: '#D6D6D6 solid 3px',
    boxShadow: 'none',
    width: '200px',
    height: '190px',
    margin: '1rem 0.5rem',
    '&:hover':{
      background:'#FD8118',
      border: '#FD8118 solid 3px',
      boxShadow: '0 14px 18px rgba(0,0,0,0.09)'
    },
    '&:hover img':{
      filter: 'invert(1)'
    },
    '&:hover h6':{
      color: 'white'
    }
  },
  cardBody:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  image: {
    width: '90px',
    height: '80px',
    objectFit: 'contain',
    marginBottom: '1rem'
  },
  title:{
    fontSize: '1.5rem',
    lineHeight: '1.6rem',
    textAlign: 'center'
  }
}

export const mobileStyles = {
  card:{
    width: '31%',
    height: '7.5rem',
    margin: '1%'
  },
  image:{
    width: '50px',
    height: '50px',
    marginBottom: '5px'
  },
  title:{
    fontSize: '0.75rem',
    lineHeight: '1rem'
  },
  cardBody:{
    padding: '1rem !important'
  }
}

export const TabStyles = {

}

export const desktopStyles = {

}
