import Player from './components/Player.jsx';
import TimerChellange from './components/TimeChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChellange title='Easy' targetTime={1} />
        <TimerChellange title='Not easy' targetTime={5} />
        <TimerChellange title='Getting tough' targetTime={10} />
        <TimerChellange title='Pros only' targetTime={15} />
      </div>
    </>
  );
}

export default App;
