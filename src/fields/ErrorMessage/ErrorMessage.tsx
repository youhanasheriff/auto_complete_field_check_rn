import React from 'react';
import { View, Text } from 'react-native';
import { useField } from 'formik';
import styles from './styles';

interface Props {
  name: string;
}

function ErrorMessage({ name }: Props): JSX.Element {
  const [field, { error, touched }] = useField(name);

  return (
    <View>
      {error && touched ? (
        <Text testID={`error-${name}`} style={styles.errorMessage}>
          {error}
        </Text>
      ) : null}
    </View>
  );
}

export default ErrorMessage;
