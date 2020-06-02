export const commonStyles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
     marginRight: '2rem'
  },
  title: {
    flexGrow: 1,
    display: 'block',
  },
  search: {
    position: 'relative',
    marginLeft: 0,
    width: '100%',
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    width: '100%',
  },
  fullList: {
    width: 'auto',
  },
  logo: {
    height: '50px',
    width: 'auto',
    padding: '5px 0'
  },
  menuIcons: {
    marginLeft: 'auto'
  },
  sideBar:{
    width: '280px',
    '& .MuiDrawer-paper':{
      width: '280px'
    },
    '& .MuiBackdrop-root':{
      pointerEvents: 'none'
    }
  },
  searchBar:{
    position: 'fixed',
    width: '100%',
    background: '#fff',
    left: '0',
    zIndex: '100',
    display: 'flex',
    top: '0',
    height: '57px'
  }
}
