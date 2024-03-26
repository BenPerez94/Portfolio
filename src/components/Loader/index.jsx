import { Loader, Placeholder } from "rsuite";
import "rsuite/Loader/styles/index.css";

const LoaderShow = () => {
  return (
    <div className="max-w-14 text-left">
      <Loader size="sm" speed="normal" />
    </div>
  );
};

export default LoaderShow;
