export const commonStyles = {
  root:{
    marginTop: '3rem',
    marginBottom: 0,
    borderBottom: 'solid 1px #BDBDBD',
    '& .MuiExpansionPanel-root':{
      borderTop: 'solid 1px #BDBDBD',
      boxShadow: 'none'
    },
    '& .MuiExpansionPanelSummary-content.Mui-expanded':{
      marginBottom: '0'
    },
    '& .MuiExpansionPanel-root.Mui-expanded':{
      margin: '0'
    },
    '& .MuiExpansionPanelDetails-root':{
      paddingLeft: '0',
      maxHeight: '300px',
      overflow: 'auto'
    },
    '& .MuiExpansionPanelSummary-root':{
      paddingLeft: '0'
    },
    '& .MuiFormControlLabel-label':{
      fontSize: '1.1rem'
    },
    '& .MuiCheckbox-colorPrimary.Mui-checked + .MuiFormControlLabel-label':{
      color: '#FD8118'
    },
  },
  title:{
    fontSize: '20px',
  },
  heading:{
    fontSize: '20px',
    marginBottom:'1rem'
  },
  searchField:{
    width: '100%',
    margin: '1rem 0',
    border: 'solid 2px #ff9a39',
    padding: '0.7rem 1rem'
  },
  filterBtn:{
    marginTop:'1rem',
    background:'#fc8234',
    color: '#fff',
    fontSize: '1rem',
    '&:hover':{
      background: '#fc8234'
    }
  }
}

export const mobileStyles = {

}

export const TabStyles = {

}

export const desktopStyles = {
  root:{
    marginRight: '2rem'
  }
}
