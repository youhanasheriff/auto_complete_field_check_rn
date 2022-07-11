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

const addons = [
  {
    id: 'no-1',
    title: 'Tittle 1',
    description: `sddsd', 'efwef', 'efwesdf`,
    value: [
      {
        label: 'l-1-1',
        value: 1111,
        price: 10,
      },
      {
        label: 'l-1-2',
        value: 2222,
        price: 20,
      },
    ],
  },
  {
    id: 'no-2',
    title: 'Tittle 2',
    description: `sddsd', 'efwef', 'efwesdf`,
    value: [
      {
        label: 'l-2-1',
        value: 1111,
        price: 10,
      },
      {
        label: 'l-2-2',
        value: 2222,
        price: 20,
      },
    ],
  },
];

const companyData = [
  {
    label: 'Company 1',
    value: 'company_value_1',
  },
  {
    label: 'Car tour',
    value: 'company_value_2',
  },
  {
    label: 'Main thing',
    value: 'company_value_3',
  },
  {
    label: 'Main car',
    value: 'company_value_4',
  },
  {
    label: 'cool things',
    value: 'company_value_5',
  },
  {
    label: 'Great tesla',
    value: 'company_value_6',
  },
  {
    label: 'Tesla 2',
    value: 'company_value_7',
  },
];

export default function App() {
  // const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [companiList, setCompaniList] = useState([]);
  const [show, setShow] = useState(false);
  // const addOnsModal = useRef(null);

  // const onSelect = something => {
  //   // console.log({ onSelect: { with: something } });
  //   setSelectedAddOns(something);
  // };

  const formik = useFormik({
    initialValues: {
      'no-1': '',
    },
    onSubmit: () => console.log({ onSubmit: 'called' }),
  });

  // useEffect(() => {
  //   console.log({ formikV: formik.values });
  // }, [formik.values]);

  // const getPrice = val => undefined;
  // const getDropdownData = val => ({ label: '', data: val });

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
      {/* <TouchableOpacity onPress={() => setShow(!show)}>
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
      )} */}
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
