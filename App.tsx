import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import {View, Text} from 'react-native'
import { Provider, useDispatch, useSelector } from 'react-redux';
import { fetchData } from './libraries/actions/settingsAction';
// import { orangeStore } from './libraries/orangeStore';
import Navigation from './navigation';

export default function App() {

  // const { settingsData } = useSelector((state) => state.settingsData);
  
  // useEffect(() => {
  //   const dispatch = useDispatch()
  //   dispatch(fetchData())
  // }, [])

  // console.log(settingsData);

  return (
    // <Provider store={orangeStore}>
    <>
      <Navigation />
      <StatusBar style="auto" />
    </>
    // </Provider>
  );
}