import * as RNFS from 'react-native-fs';

const save = (fileName, key = null, value = null, data, encoding = 'utf8') => {
  const path = RNFS.DocumentDirectoryPath + `/${fileName}`;

  if (key && value) {
    data[key] = value;
  }

  let jsonString = JSON.stringify(data);

  RNFS.readFile(path, encoding)
    .then(file => {
      return Promise.resolve(file);
    })
    .then(file => {
      // fixing a bug in RNFS.writeFile and write
      // by adding empty string to the end b/c
      // the file wont write the only half of the file

      // first strip the file and check the length against the json string

      if (file.trim().length > jsonString.length) {
        const difference = file.length - jsonString.length;
        for (let i = 0; i < difference; i++) {
          jsonString = jsonString + ' ';
        }
        console.log(jsonString.length, file.length);
      }
      RNFS.writeFile(path, jsonString, encoding).then(() =>
        console.log('FILE WRITTEN!'),
      );
    });
};

export default save;
