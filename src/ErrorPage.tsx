import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  let error: any;
  error = useRouteError();
  console.error(error);

  return (
    <div className=" flex h-screen items-center justify-center flex-col">
      <h1 className=" mb-10 text-3xl">Oops!</h1>
      <p className=" mb-8">Sorry, an unexpected error has occurred.</p>
      <p className=" text-gray-500 text-center">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
