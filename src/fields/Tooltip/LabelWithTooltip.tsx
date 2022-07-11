import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  TextStyle,
} from 'react-native';
import { Tooltip } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import WebView from 'react-native-webview';
import styles from './styles';
import Colors from '../../constants/Colors';
import { subLabel } from '../../types/formConfig';

export interface MobileNumberInputRef {
  isValidNumber: (value: string | undefined) => void;
}

interface Props {
  label: string;
  subLabel?: subLabel;
  name: string;
  tooltip?: string;
  labelStyle?: StyleProp<TextStyle>;
}

function LabelWithTooltip({
  label,
  subLabel,
  name,
  tooltip,
  labelStyle,
}: Props): JSX.Element {
  const [webViewLoaded, setWebViewLoaded] = useState(false);

  const onModalClose = () => {
    setTimeout(() => {
      setWebViewLoaded(false);
    }, 100);
  };

  const getWebView = (url: string) => {
    return (
      <>
        <View
          style={[
            styles.maxHeight,
            { display: webViewLoaded ? 'flex' : 'none' },
          ]}
        >
          <WebView
            source={{ uri: url }}
            onLoadEnd={() => setWebViewLoaded(true)}
            javaScriptEnabled
          />
        </View>
        <View
          style={[
            styles.loaderCenter,
            {
              display: webViewLoaded ? 'none' : 'flex',
            },
          ]}
        >
          <View style={styles.loaderSize}>
            {/* <Loader />
             */}
            <Text>Loading./.....</Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <View style={styles.labelContainer}>
        <Text style={[styles.fieldLabel, labelStyle]} testID={`label-${name}`}>
          {label}{' '}
          {tooltip && (
            <View style={styles.tooltipContainer}>
              <Tooltip
                width={240}
                height={80}
                backgroundColor={Colors.black}
                withOverlay={false}
                popover={
                  <Text style={styles.tooltipIcon} testID="tooltipInfo">
                    {tooltip}
                  </Text>
                }
              >
                <AntDesign name="infocirlce" size={16} color="grey" />
              </Tooltip>
            </View>
          )}
        </Text>
      </View>
      {subLabel && (
        <>
          {/* <TouchableOpacity
            // onPress={webViewModalRef.current?.open}
            disabled={!subLabel.url && !subLabel.text}
          > */}
          <Text
            style={[
              styles.fieldSubLabel,
              { textDecorationLine: !subLabel.url ? 'none' : 'underline' },
            ]}
          >
            {subLabel.label}
          </Text>
          {/* </TouchableOpacity> */}
          {/* <FullScreenModal
            ref={webViewModalRef}
            testID="webViewModal"
            onClose={onModalClose}
            renderDoneButton={false}
          >
            {subLabel.text ? (
              <View style={styles.subLabelText}>
                <Text>{subLabel.text}</Text>
              </View>
            ) : (
              getWebView(subLabel.url ?? '')
            )}
          </FullScreenModal> */}
        </>
      )}
    </>
  );
}

export default LabelWithTooltip;
