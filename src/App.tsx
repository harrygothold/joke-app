import "./App.scss";
import Button from "./components/Button";
import BlacklistFilters from "./containers/BlacklistFilters";
import CategoryFilter from "./containers/CategoryFilters";
import useBlacklist from "./utils/hooks/useBlacklist";
import useCategory from "./utils/hooks/useCategory";
import useJokes from "./utils/hooks/useJokes";
import useToggle from "./utils/hooks/useToggle";

const App = () => {
  const { joke, refetch } = useJokes();

  const { handleBlacklistChange } = useBlacklist();
  const { category, handleCategoryChange } = useCategory();

  const { toggle: showPunchline, setToggle } = useToggle();
  const buttonText = showPunchline ? "Next Joke" : "Reveal Punchline";

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
      {joke !== null ? (
        <div className="App__container">
          <h1>Joke App</h1>
          <BlacklistFilters handleChange={handleBlacklistChange} />
          <CategoryFilter
            handleChange={handleCategoryChange}
            category={category}
          />
          <p className="App__setup">{joke.setup}</p>
          {showPunchline && (
            <p className="App__punchline">{joke.delivery} 🤣</p>
          )}
          <Button
            onClick={async () => {
              await handleClick();
            }}
            type="button"
          >
            {buttonText}
          </Button>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default App;
