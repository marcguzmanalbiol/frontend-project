import "./filter.css";
import InputText from "./inputText";
import { DebounceInput } from "react-debounce-input";
import {
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  makeStyles,
  Container,
  CssBaseline,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Filter = ({ handleOrdering, handleDirection, setPage, setSearch }) => {
  const classes = useStyles();

  return (
    <CssBaseline>
      <Container>
        <div className="filter-box">
          <h3>Order by: </h3>
        </div>
        <div className="filter-box">
          <FormControl className={classes.formControl}>
            <InputLabel id="choose_ordering-label">Field</InputLabel>
            <Select id="choose_ordering" onChange={handleOrdering}>
              <MenuItem value="" name='None'>None</MenuItem>
              <MenuItem value="released">Release Date</MenuItem>
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="rating">Rating</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="filter-box">
          <FormControl className={classes.formControl}>
            <InputLabel>Ordering</InputLabel>
            <Select onChange={handleDirection}>
              <MenuItem value='asc'>Ascendent</MenuItem>
              <MenuItem value="desc">Descendent</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="filter-box">
          <DebounceInput
            minLength={2}
            debounceTimeout={300}
            element={InputText}
            onChange={(event) => {
              setSearch(event.target.value);
              setPage(1);
            }}
            placeholder={'Search'}
          />
        </div>
      </Container>
    </CssBaseline>
  );
};

export default Filter;
