import './App.css';
import Button from './components/Button';
import useJokes from './utils/hooks/useJokes';
import useToggle from './utils/hooks/useToggle';

const App = () => {
  const { joke, refetch } = useJokes();
  const { toggle: showPunchline, setToggle } = useToggle();
  const buttonText = showPunchline ? 'Next Joke' : 'Reveal Punchline';

  const handleClick = async () => {
    if (showPunchline) {
      setToggle(false);
      await refetch();
    } else {
      setToggle(true);
    }
  };

  return (
    <div className="App">
      {joke ? (
        <div>
          <h1>Joke App</h1>
          <p>{joke.setup}</p>
          {showPunchline && <p>{joke.delivery} 🤣</p>}
          <Button onClick={() => handleClick()} type="button">
            {buttonText}
          </Button>
        </div>
      ) : (
        <div>Oops something went wrong</div>
      )}
    </div>
  );
};

export default App;
