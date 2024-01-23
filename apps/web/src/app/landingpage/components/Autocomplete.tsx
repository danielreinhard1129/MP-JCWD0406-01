'use client';

import { useRouter } from 'next/navigation';
import Select from 'react-select';

const Autocomplete = ({ data }: any) => {
  const router = useRouter();
  const options = data.map((event: any) => {
    return { value: event.id, label: event.title };
  });

  const handleChange = (selectedOption: any) => {
    if (selectedOption && selectedOption.value)
      router.push(`${selectedOption.value}`);
  };

  return (
    <div>
      <Select
        options={options}
        isClearable={true}
        isSearchable={true}
        placeholder="Find your Event"
        onChange={handleChange}
      />
    </div>
  );
};

export default Autocomplete;
