import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const [currentUser, setCurrent] = useState({ email: '', password: '' });
  const [word, setWord] = useState('');
  const [wordResult, setWordResult] = useState('');
  const [save, setSave] = useState('');
  const [loader, setLoader] = useState('');
  return (
    <UserContext.Provider
      value={{
        users: [user, setUser],
        current: [currentUser, setCurrent],
        search: [word, setWord],
        wordResults: [wordResult, setWordResult],
        saved: [save, setSave],
        Loader: [loader, setLoader],
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
