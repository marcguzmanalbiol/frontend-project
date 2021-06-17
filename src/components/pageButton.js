import { Button } from "@material-ui/core";

const PageButton = ({ handlePage, pageUpOrDown }) => {
  return (
    <div>
      <Button onClick={() => handlePage(pageUpOrDown)}>Page {pageUpOrDown===1 ? 'Up' : 'Down'} </Button>
    </div>
  );
};

export default PageButton;
