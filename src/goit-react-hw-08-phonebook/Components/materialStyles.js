import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export const InputText = withStyles({
  root: {
    background: 'white',
    marginBottom: 10,
    display: 'block',
    width: '100%',
    borderRadius: '5px',
    boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.25)',
    '& label.Mui-focused': {
      color: 'palevioletred',
    },
    '& .MuiOutlinedInput-root': {
      '& input': {
        height: '100%',
        boxSizing: 'border-box',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'palevioletred',
      },
      display: 'block',
    },
  },
})(TextField);

export const actionBtn = {
  backgroundColor: '#2196f3',
  margin: '2px 5px',
};

export const addBtn = {
  backgroundColor: '#2196f3',
  display: 'block',
  width: '100%',
};

// export const inputText = {
//   background: 'white',
//   marginBottom: '10px',
//   display: 'block',
//   width: '100%',
//   borderRadius: '5px',
//   boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.25)',
// };
