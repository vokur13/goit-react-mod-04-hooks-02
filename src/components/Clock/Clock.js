import { useState, useEffect, useRef } from 'react';
import styles from './Clock.module.css';

export const Clock = () => {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      //       console.log('Это интервал каждые 1000ms ' + Date.now());
      setTime(new Date());
    }, 1000);

    console.log(time);

    return () => {
      console.log('Cleanup Function');
      stop();
    };
  }, [time]);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          setTime(new Date());
        }}
      >
        Reset StateTime
      </button>
      <p className={styles.clockface}>
        Текущее время: {time.toLocaleTimeString()}
      </p>
      <button type="button" onClick={stop}>
        Остановить
      </button>
    </div>
  );
};

// export default function Clock() {
//   const [time, setTime] = useState(() => new Date());
//   const intervalId = useRef(null);

//   useEffect(() => {
//     intervalId.current = setInterval(() => {
//       console.log('Это интервал каждые 2000ms ' + Date.now());
//       setTime(new Date());
//     }, 2000);

//     return () => {
//       console.log('Это функция очистки перед следующим вызовом useEffect');
//       stop();
//     };
//   }, []);

//   const stop = () => {
//     clearInterval(intervalId.current);
//   };

//   return (
//     <div className={styles.container}>
//       <p className={styles.clockface}>
//         Текущее время: {time.toLocaleTimeString()}
//       </p>
//       <button type="button" onClick={stop}>
//         Остановить
//       </button>
//     </div>
//   );
// }

// class ProtoClock extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log('Это интервал каждые 1000ms ' + Date.now());
//       this.setState({ time: new Date() });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     console.log('Эот метод вызывается перед размонтированием компонента');
//     this.stop();
//   }

//   stop = () => {
//     clearInterval(this.intervalId);
//   };

//   render() {
//     return (
//       <div className={styles.container}>
//         <p className={styles.clockface}>
//           Текущее время: {this.state.time.toLocaleTimeString()}
//         </p>
//         <button type="button" onClick={this.stop}>
//           Остановить
//         </button>
//       </div>
//     );
//   }
// }
