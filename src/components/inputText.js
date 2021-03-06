import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const InputText = (props) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        label={props.placeholder}
        onChange={props.onChange}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            console.log("Not today");
          }
        }}
      />
    </form>
  );
};

export default InputText;
