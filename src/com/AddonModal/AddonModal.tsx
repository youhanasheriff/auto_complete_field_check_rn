/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Keyboard, ScrollView, View } from 'react-native';
import i18n from 'i18n-js';

import styles from './styles';
import AddonCard, { Addon } from '../AddonCard/AddonCard';
import FullScreenModal, {
  ModalRef,
} from '../../../../../../components/Modal/FullScreenModal/FullScreenModal';
import { translationKey } from '../../../../../../data/formConfigs/sg_iii_car_insurance/psqForm/packagesAndAddons';
import ButtonSpinner from '../../../../../../components/ButtonSpinner/ButtonSpinner';

interface obj {
  [key: string]: any;
}
interface Props {
  addOnsModal: React.RefObject<ModalRef>;
  setAddonNames: (value: Addon[]) => void;
  formik: any;
  addons: Addon[];
  pageSlug: string;
  packageId: string;
  selectedAddOns: Addon[];
}

const AddonModal: React.FC<Props> = ({
  addOnsModal,
  addons,
  formik,
  packageId,
  pageSlug,
  setAddonNames,
  selectedAddOns,
}) => {
  const onSelect = async (addonsList: Addon[]) => {
    setAddonNames(addonsList);
    const finalFormikResult: obj = {};

    addonsList.forEach(item => {
      finalFormikResult[item.id] = item.selectedValue ?? item.value;
    });

    await formik.resetForm();
    await formik.setFieldValue(`['${pageSlug}.packages-and-addons']`, {
      package: packageId,
      'add-ons': finalFormikResult,
    });
  };

  const onClose = async () => {
    await formik.resetForm();
    await formik.setFieldValue(`['${pageSlug}.packages-and-addons']`, {
      package: packageId,
    });

    setAddonNames([]);
    addOnsModal.current?.close();
  };

  const onAdd = () => {
    addOnsModal.current?.close();
  };

  const getDropdownData = (value: number | any[]) => {
    if (Array.isArray(value)) return { label: '', data: value };

    return undefined;
  };

  const getPrice = (value: number | any[]): number | undefined => {
    if (Array.isArray(value)) return undefined;

    return value;
  };

  return (
    <FullScreenModal
      ref={addOnsModal}
      testID="addOnsModal"
      title={i18n.t(`${translationKey}.addOns`)}
      onClose={onClose}
      renderDoneButton={false}
    >
      <ScrollView>
        <View style={[styles.container, styles.paddingHorizontal]}>
          {addons.map(addon => (
            <AddonCard
              key={addon.id}
              name={addon.id}
              title={addon.title}
              description={addon.description}
              selectedAddon={selectedAddOns || []}
              onClick={onSelect}
              onClose={(value: string) => {
                const addonList = selectedAddOns.map(item => {
                  const temp = item;
                  if (item.id === value) {
                    temp.selectedValue =
                      formik.values[`${pageSlug}.packages-and-addons`]?.[
                        'add-ons'
                      ]?.[value];
                  }
                  return temp;
                });
                onSelect(addonList);
              }}
              addOn={addon}
              formik={formik}
              price={getPrice(addon.value)}
              dropDownData={getDropdownData(addon.value)}
            />
          ))}
          <ButtonSpinner
            title={i18n.t(`common.add`)}
            onPressIn={Keyboard.dismiss}
            onPress={onAdd}
            disabled={selectedAddOns.length === 0}
          />
        </View>
      </ScrollView>
    </FullScreenModal>
  );
};

export default AddonModal;
