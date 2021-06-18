import { Button } from "@material-ui/core";
import "./pageButton.css";

const PageButton = ({ handlePage, pageUpOrDown }) => {
  return (
    <div className="button">
      <Button
        size="medium"
        variant="outlined"
        color="primary"
        onClick={() => handlePage(pageUpOrDown)}
      >
        Page {pageUpOrDown === 1 ? "Up" : "Down"}{" "}
      </Button>
    </div>
  );
};

export default PageButton;
