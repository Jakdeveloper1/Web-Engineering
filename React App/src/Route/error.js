import { useRouteError } from "react-router-dom";

// handling for no route found
export default function ErrorPage() {
   const error = useRouteError();
   console.error(error.statusText);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText  }</i>
        <i>{error.message}</i>
      </p>
    </div>
  );
}
