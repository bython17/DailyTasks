import * as RNFS from 'react-native-fs';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';

/* 
This hook helps to fetch any file
and returns a data, error and loading object
*/

// default configuration
const defaultConfig = {
  theme: 'light',
};

const useFetch = (fileName, encoding = 'utf8') => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // use the documentDirectory path and add the param: fileName to it
    const path = RNFS.DocumentDirectoryPath + '/' + fileName;
    // check if the path exists
    RNFS.exists(path)
      .then(doesExist => {
        // stop the function if it doesnt exist
        return Promise.resolve(doesExist);
      })
      .then(exists => {
        if (exists) {
          // read the file
          RNFS.readFile(path, encoding).then(file => {
            const jsObj = JSON.parse(file);
            // set the states
            setData(jsObj);
            setLoading(false);
          });
        } else {
          RNFS.writeFile(path, JSON.stringify(defaultConfig), encoding).then(
            () => {
              Alert.alert('A new user configuration file has been created.');
            },
          );
        }
      });
  }, [fileName]);

  return {data, error, loading, setError, setLoading, setData};
};

export default useFetch;
