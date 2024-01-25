import { useRouteError } from 'react-router-dom';
import Button from './common/Button';

function RouterError() {
  const error = useRouteError();

  if (error instanceof Error) {
    console.log(error.message);

    return (
      <div>
        <h1>Something went wrong 😢</h1>
        <p>{error.message}</p>

        <Button type='nav' to='-1'>
          &larr; Go back
        </Button>
      </div>
    );
  }

  // Fallback if error is not an Error instance
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>An unknown error occurred.</p>

      <Button type='nav' to='-1'>
        &larr; Go back
      </Button>
    </div>
  );
}

export default RouterError;
