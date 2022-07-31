/* .appBar {
  border-radius: 15px;
  margin: 30px 0; */
/* display: flex;
  flex-direction: row; */
/* justify-content: center;
  align-items: center;
} */

/* .MuiTypographyRoot {
  color: 'rgba(0,183,255, 1)';
} */

/* .heading {
  color: rgb(41, 85, 188);
}

.image {
  margin-left: 15px;
} */

/*HAVING TROUBLE WITH MUI STYLE VERSION - MUST HAVE CHANGED RECENTLY-ISH*/
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#173288',
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    },
  },
}));
