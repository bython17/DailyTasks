import {useState, useEffect} from 'react';
import * as RNFS from 'react-native-fs';

const useSave = (
  file,
  key,
  value,
  dependency,
  data = {},
  encoding = 'utf8',
) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  if (!dependency) {
    dependency = value;
  }

  useEffect(() => {
    if (data && value) {
      data[key] = value;
      // prepare a json string to be written
      let jsonString = JSON.stringify(data);
      jsonString = jsonString + ' ';
      console.log(jsonString, 'useSave');

      RNFS.writeFile(
        RNFS.DocumentDirectoryPath + '/' + file,
        jsonString,
        encoding,
      )
        .then(() => {
          setResult(true);
          setLoading(false);
          setError(null);
        })
        .catch(err => {
          setError(err.message);
          console.log(err);
        });
    }
    return;
  }, [dependency]);

  return {result, loading, error};
};

export default useSave;
