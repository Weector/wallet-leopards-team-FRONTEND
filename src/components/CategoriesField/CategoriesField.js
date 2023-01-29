import React from 'react';
import SettingsAddCategory from 'components/SettingsAddCategory/SettingsAddCategory';
import SettingsRemoveCategory from 'components/SettingsRemoveCategory/SettingsRemoveCategory';
import s from './CategoriesField.module.scss';

const CategoriesField = () => {
  return (
    <div className={s.field}>
      <h2 className={s.header}>Categories</h2>
      <SettingsAddCategory />
      <SettingsRemoveCategory />
    </div>
  );
};

export default CategoriesField;
