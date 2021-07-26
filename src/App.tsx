import React, { useState } from 'react';
import './App.css';
import Memo from './assets/memo.png'
import findBucketListById from './utils/api';


const App = () => {

  const [bucketList, setBucketList] = useState<string[]>([]);

  const buttonCallback = async () => {
    const bucketList: string[] = await findBucketListById('1');
    console.table(bucketList);
    setBucketList(bucketList);
  }
  
  return (
    <div className="App">
      <header>
        <img src={Memo} alt="Coming Soon!" />
        <button onClick={() => buttonCallback()}>
          Click me to retrieve your bucket list!
        </button>
        { 
          bucketList && 
          <ol>
            {bucketList.map((item, index) => (<li key={index}>{item}</li>))}
          </ol>
        }
      </header>
    </div>
  );
}

export default App;
