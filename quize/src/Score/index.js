import React, { useState, useEffect } from 'react';

export default function Score({ quizeScore }) {
  const[quizeStorage, setQuizeStorage] = useState([]);

  useEffect(() => {
    const quizeStorage = JSON.parse(localStorage.getItem('previousScores'));
    if (quizeStorage) {
      setQuizeStorage(quizeStorage);
    }
  }, []);

useEffect(() => {
  const previousScores = [...quizeStorage, { 'attemptNumber': quizeStorage.length + 1, 'score': quizeScore }];
    localStorage.setItem('previousScores', JSON.stringify(previousScores));
  }, [quizeStorage]);

  return (
    <><div>Your score is: {quizeScore}</div>
      {quizeStorage.length > 0 && (
        <>
          Your previous attempts score: {
            quizeStorage.map((item, index) => {
              return <div key={index}>attemptNumber{item.attemptNumber}: {item.score}</div>
            })
          }
        </>
      )}
    </>
  );
}