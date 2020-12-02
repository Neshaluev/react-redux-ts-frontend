import React, { useState } from 'react';
import { lenStr } from '../../helpers/helpers';

import Icon from '../Icon/Icon';

import './select.scss';

type TPropsSelect = {
  titleSelect: string,
  options: string[],
  handleCheckedSelect: (...args: any) => void,
  iconSize?: number,
  inputRef?: any
}

function Select({
  titleSelect,
  options,
  handleCheckedSelect,
  iconSize,
  inputRef,
}: TPropsSelect) {
  const [isChecked, setChecked] = useState<boolean>(false);
  const [selectItem, setSelectItem] = useState<string | null>(null);

  const handleCheckedList = (data: any) => {
    handleCheckedSelect(data);
    setSelectItem(data);
    setChecked(!isChecked);
  };

  const checkItem = (e: any) => {
    const { target } = e;
    if (!target.classList.contains('select-box__input-text')) {
      setChecked(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('click', checkItem);
    return () => window.removeEventListener('click', checkItem);
  }, []);

  return (
    <div className="select-box">
      <input
        className="select-box__input"
        type="radio"
        id="0"
        value="1"
        name="Ben"
        checked={isChecked}
      />
      <div
        className="select-box__input-text"
        onClick={() => setChecked(!isChecked)}
        ref={inputRef}
      >
        {selectItem == null ? titleSelect : lenStr(selectItem, 15)}
      </div>
      <Icon
        className="select-box__input-icon"
        name={'arrow-down'}
        size={iconSize}
      />
      <ul className="select-box__list">
        {options.map((data: any, idx: any) => (
          <li
            className="select-box__option"
            key={idx}
            onClick={() => handleCheckedList(data)}
          >
            <span>{lenStr(data, 15)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Select.defaultProps = {
  options: [''],
  titleSelect: '',
  handleCheckedSelect: () => {},
  iconSize: 25,
};

export default Select;
