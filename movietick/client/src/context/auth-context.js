import React from 'react';

export default React.createContext({
    userId: null,
    login: ( userId) => {},
    logout: () => {}
});