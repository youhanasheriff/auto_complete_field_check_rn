import React, { useState } from 'react';
import { FlatList, TextInput, View } from 'react-native';
import { CheckBox, SearchBar } from 'react-native-elements';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import i18n from 'i18n-js';
import Colors from '../../../constants/Colors';
import CommonStyles from '../../../constants/CommonStyles';
import { ReplyOption } from '../../../hooks/useReplyOptions';
import FullScreenModal, { ModalRef } from '../FullScreenModal/FullScreenModal';
import styles from './styles';

interface Props {
  modal: React.Ref<ModalRef> | undefined;
  title: string | undefined;
  isFormValid: boolean | undefined;
  sendToParent: (() => void) | undefined;
  handleValidate: (() => void) | undefined;
  updateSearch: (search: string) => void;
  search: string;
  flatListRef: React.LegacyRef<FlatList<any>> | undefined;
  searchlist: ReplyOption[] | null | undefined;
  toggleRadio: (value: string | number | boolean) => void;
  isOtherSelected?: boolean;
  handleTextChange?: (arg0: string) => void;
  onFocus?: () => void;
  value?: string | number | boolean;
}

const RadioSelectFullScreenModal: React.FC<Props> = ({
  modal,
  title,
  isFormValid,
  sendToParent,
  handleValidate,
  updateSearch,
  search,
  flatListRef,
  searchlist,
  toggleRadio,
  isOtherSelected,
  handleTextChange,
  onFocus,
  value,
}) => {
  const [newValue, setNewValue] = useState<string | number | boolean>(value);
  return (
    <FullScreenModal
      ref={modal}
      title={title}
      submittable={isFormValid}
      onSend={sendToParent}
      onValidate={handleValidate}
    >
      <SearchBar
        platform="ios"
        placeholder={i18n.t('common.search')}
        onChangeText={updateSearch}
        value={search}
        inputContainerStyle={CommonStyles.searchBar}
        inputStyle={CommonStyles.searchBarInputStyle}
        lightTheme={false}
        round={false}
      />
      <View style={styles.itemContainer}>
        <FlatList
          ref={flatListRef}
          contentContainerStyle={styles.flatListStyle}
          data={searchlist}
          keyExtractor={({ label }) => label}
          renderItem={({ item }) => (
            <View>
              <CheckBox
                key={item.id}
                title={item.label}
                checked={item.checked || newValue === item.value}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                textStyle={styles.textStyle}
                checkedColor={Colors.b40}
                uncheckedColor={Colors.d20}
                containerStyle={styles.containerStyle}
                onPress={() => {
                  setNewValue(item.value);
                  toggleRadio(item.value);
                }}
              />
              {item.value === 'other' && isOtherSelected && (
                <View style={styles.otherContainer}>
                  <TextInput
                    style={styles.otherInput}
                    autoFocus
                    placeholder={i18n.t('common.pleaseSearch')}
                    multiline
                    onChangeText={
                      handleTextChange && (text => handleTextChange(text))
                    }
                    onFocus={onFocus}
                  />
                  <KeyboardSpacer />
                </View>
              )}
            </View>
          )}
        />
      </View>
    </FullScreenModal>
  );
};

export default RadioSelectFullScreenModal;
