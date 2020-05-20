export const commonStyles = {
  section:{
    padding: '2rem 0 5rem',
    position: 'relative',
    '&::before': {
      content: '""',
      background: 'url(/static/images/circleCenter.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      top: '55%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      height: '540px',
      width: '540px',
      position: 'absolute',
      zIndex: '-1'
    },
    '&::after': {
      content: '""',
      background: 'url(/static/images/circleCenter.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      bottom: '-15rem',
      left: '-25rem',
      height: '50rem',
      width: '50rem',
      position: 'absolute',
      zIndex: '-1'
    }
  },
  card: {
    margin: '0 2rem 2rem 0',
    border: '#D6D6D6 solid 2px',
    boxShadow: 'none',
    padding: '1.5rem 2rem',
    borderRadius: '6px'
  },
  Gallery:{
    '& .image-gallery-thumbnail':{
      width: '23%'
    },
    '& .image-gallery-thumbnail.active':{
      border: '4px solid #ff8116'
    },
    '& .image-gallery-left-nav .image-gallery-svg':{
      width: '60px',
      height: '60px',
      color: 'black',
    },
    '& .image-gallery-right-nav .image-gallery-svg':{
      width: '60px',
      height: '60px',
      color: 'black',
    },
    '& .image-gallery-thumbnails-wrapper':{
      marginTop: '2rem'
    },
    '& .image-gallery-left-nav':{
      left: '-3.5rem',
      outline: 'none'
    },
    '& .image-gallery-right-nav':{
      right: '-3.5rem',
      outline: 'none'
    }
  },
  heading:{
    color: '#868686',
    fontSize: '1.1rem'
  },
  paragraph:{
    fontSize: '1.2rem',
    fontWeight: '500'
  },
  box:{
    marginBottom: '2rem'
  },
  Pricebox:{
    borderTop: 'solid 1px #D6D6D6',
    paddingTop: '1rem',
    '& h4':{
      fontWeight: '600'
    }
  },
  cardInnerBody:{
    display: 'flex',
    width: '100%',
    paddingBottom: '0 !important'
  },
  Left: {
    width: '80%'
  },
  Right:{
    width: '20%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  SellerCard:{
    padding:0
  },
  cardInner:{
    padding:'0 !important'
  },
  cardHead:{
    padding: '2.5rem 2rem 0 2rem',
    display: 'flex',
    flexWrap: 'wrap'
  },
  sellerImg:{
    '& img':{
      width: '71px',
      height: '71px',
      borderRadius: '50%',
      border: 'solid 2px #FF8116'
    }
  },
  sellerDetails:{
    marginLeft: '2rem',
    flex: '1'
  },
  cardAction:{
    display: 'flex',
    flexWrap: 'wrap',
    '& button':{
      width: '50%',
      borderRadius: 0,
      boxShadow: 'none',
      height: '4rem',
    }
  },
  primaryBtn:{
    background: '#FF8116',
    color: '#fff',
    '&:hover': {
      background: '#FF8116',
    }
  },
  secondaryBtn:{
    background: '#EBEEEF',
    '&:hover': {
      background: '#EBEEEF',
    }
  }
}

export const mobileStyles = {
  card: {
    padding: '1rem',
    marginRight: '0'
  },
  Gallery: {
    '& .image-gallery-thumbnail': {
      width: '33%'
    }
  },
  SellerCard:{
    padding: '0'
  },
  cardHead:{
    padding: '1.5rem 1rem'
  },
  heading:{
    fontSize: '14px'
  }
}

export const desktopStyles = {

}
