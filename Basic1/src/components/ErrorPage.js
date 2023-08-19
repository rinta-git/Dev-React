import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const err = useRouteError();
  return (
    <>
      <h1>Oops!</h1>
      <p>Something went wrong</p>
      <p>{err.status}</p>
      <p>{err.statusText}</p>
    </>
  );
};

export default ErrorPage;
