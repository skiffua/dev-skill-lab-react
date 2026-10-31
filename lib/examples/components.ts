
export const debounceExample = `
function DebounceComponent() {
    const delay = 4000;
    let timeOutkey = React.useRef();
    let intervalKey = React.useRef();
    const [msg, setMessage] = React.useState('');
    const [count, setCounter] = React.useState(delay / 1000);

    const handleClick = () => {
        if (timeOutkey || intervalKey) {
            resetTimers();
            setCounter(delay / 1000);
        }        
        
        timeOutkey.current = setTimeout(() => {
            setMessage('Hello World!');
            resetTimers();
        }, delay);
        intervalKey.current = setInterval(() => {
            setCounter((prev) => {
                if (prev > 0) {
                    return prev - 1000 / 1000;                    
                } else {
                    clearInterval(intervalKey);
                    return delay / 1000;
                }
            })
        }, 1000);
    };
    
    const resetTimers = () => {
      if (timeOutkey) {
          clearTimeout(timeOutkey.current);
      }
      if (intervalKey) {
          clearInterval(intervalKey.current);
          setCounter(delay / 1000);
      }
    };

    return (
        <div className='mb-2'>
            <p className='mb-2'>
                <strong>Display a message with a 4-second delay after the last button click.</strong>
            </p>
            {count && <strong>{count}</strong>}
            <p className='text-primary font-semibold'>
                Message => {msg}
            </p>
            <div className="mt-6 flex flex-col">
                <button onClick={handleClick} className="font-bold border rounded-base px-4 py-2.5 cursor-pointer focus:outline-2">
                Click me!
                </button>
                <button onClick={resetTimers} className="font-bold border rounded-base px-4 py-2.5 cursor-pointer focus:outline-2">
                    Reset
                </button> 
            </div>
        </div>
    );
}

render(<DebounceComponent />);
`;
