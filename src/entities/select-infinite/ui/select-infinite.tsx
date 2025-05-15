import { Select } from 'antd';
import { SelectProps } from 'antd/es/select';
import { ReactElement } from 'react';

interface Props extends SelectProps {
  apiPath: string;
  queryKey: string[];
}

export default function SelectInfinite({ ...selectProps }: Props): ReactElement {
  return <Select {...selectProps} />;
}
