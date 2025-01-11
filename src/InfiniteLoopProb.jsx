import { useState, useEffect, useRef } from 'react';

//Infinite loop
// function CountInputChanges() {
//     const [value, setValue] = useState('');
//     const [count, setCount] = useState(-1);
  
//     useEffect(() => setCount(count + 1));
  
//     const onChange = ({ target }) => setValue(target.value);
  
//     return (
//       <div>
//         <input type="text" value={value} onChange={onChange} />
//         <div>Number of changes: {count}</div>
//       </div>
//     )
//   }

function CountInputChanges() {
    const [value, setValue] = useState('');
    const [count, setCount] = useState(-1);
  
    useEffect(() => setCount(count + 1), [value]);
  
    const onChange = ({ target }) => setValue(target.value);
  
    return (
      <div>
        <h2>With dependency</h2>
        <input type="text" value={value} onChange={onChange} />
        <div>Number of changes: {count}</div>
      </div>
    );
  }

  function CountInputUseRef() {
    const [value, setValue] = useState('');
    const countRef = useRef(0);
  
    const onChange = ({ target }) => {
      setValue(target.value);
      countRef.current++;
    };
  
    return (
      <div>
        <h2>Use Ref</h2>
        <input type="text" value={value} onChange={onChange} />
        <div>Number of changes: {countRef.current}</div>
      </div>
    );
  }

function MineSimplified() {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(0);
  

  const onChange = ({ target }) => {
    let temp;
    setValue(target.value);
    
    temp = count + 1;

    setCount(temp);
  };

  return (
    <div>
      <h2>Mine simplifed</h2>
      <input type="text" value={value} onChange={onChange} />
      <div>Number of changes: {count}</div>
    </div>
  );
}

//fails becasue. secret now is a new object and the dependency has changed. 
//So useEffect(..., [secret]) invokes again the side-effect that updates //
//the state and a new secret object is created again, and so on.
//need to be checking secret.value as below
// function CountSecrets() {
//     const [secret, setSecret] = useState({ value: "", countSecrets: 0 });
  
//     useEffect(() => {
//       if (secret.value === 'secret') {
//         setSecret(s => ({...s, countSecrets: s.countSecrets + 1}));
//       }
//     }, [secret]);
  
//     const onChange = ({ target }) => {
//       setSecret(s => ({ ...s, value: target.value }));
//     };
  
//     return (
//       <div>
//         <input type="text" value={secret.value} onChange={onChange} />
//         <div>Number of secrets: {secret.countSecrets}</div>
//       </div>
//     );
//   }

  function CountSecretsCorr() {
    const [secret, setSecret] = useState({ value: "", countSecrets: 0 });
  
    useEffect(() => {
      if (secret.value === 'secret') {
        setSecret(s => ({...s, countSecrets: s.countSecrets + 1}));
      }
    }, [secret.value]);
  
    const onChange = ({ target }) => {
      setSecret(s => ({ ...s, value: target.value }));
    };
  
    return (
      <div>
        <input type="text" value={secret.value} onChange={onChange} />
        <div>Number of secrets: {secret.countSecrets}</div>
      </div>
    );
  }

export {CountSecretsCorr, MineSimplified, CountInputChanges, CountInputUseRef }