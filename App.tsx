import { Field, Formik, FormikProvider, useFormik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  useFonts,
  Raleway_900Black as Raleway900Black,
  Raleway_400Regular as Raleway400Regular,
} from '@expo-google-fonts/raleway';

import AutoSuggestionField from './src/fields/AutoSuggestionField/AutoSuggestionField';
import NativePicker from './src/fields/NativePicker/NativePicker';
import { companyData } from './sample_data';

export default function App() {
  const [companiList, setCompaniList] = useState([]);

  const formik = useFormik({
    initialValues: {
      'no-1': '',
    },
    onSubmit: () => console.log({ onSubmit: 'called' }),
  });

  const [fontLoaded] = useFonts({
    FilsonSoftRegular: require('./src/fonts/FilsonSoftRegular.otf'),
    FilsonSoftBold: require('./src/fonts/FilsonSoftBold.otf'),
    Raleway900Black,
    Raleway400Regular,
  });

  if (!fontLoaded) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <FormikProvider value={formik}>
        <View style={styles.text}>
          <Field
            name={`['.seatingCapacity']`}
            label={`seatingCapacity`}
            placeholder={`seatingCapacity`}
            items={[]}
            component={NativePicker}
            onClose={() => console.log(`updateValue => seatingCapacity`)}
          />
          <Field
            name="no-1"
            data={companiList}
            label="label"
            fetchData={async (query: string) => {
              const filtered = companyData.filter(v => v.label.includes(query));

              console.log(query, filtered);

              setCompaniList(() =>
                filtered.length
                  ? filtered
                  : [
                      {
                        label: 'No result found',
                        value: '--',
                      },
                    ],
              );
            }}
            component={AutoSuggestionField}
            updateValue={() => console.log(`updateValue => no-1`)}
          />
        </View>
      </FormikProvider>
      {/* 
        <TouchableOpacity onPress={() => setShow(!show)}>
          <Text>Show data</Text>
        </TouchableOpacity>
        {show && (
          <View style={styles.conScroll}>
            <ScrollView style={styles.scroll}>
              {companyData.map(data => (
                <TouchableOpacity onPress={() => console.log({ data })}>
                  <Text style={styles.listStyle}>{data.label}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )} 
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: '100%',
    padding: 20,
  },
  conScroll: {
    maxHeight: 200,
    width: '100%',
    backgroundColor: 'blue',
  },
  scroll: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    maxHeight: 200,
    width: '90%',
    backgroundColor: '#d3d3d3',
  },
  listStyle: {
    padding: 10,
  },
});
