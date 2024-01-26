'use client';

import { useParams, useRouter } from 'next/navigation';
import Select from 'react-select';

const Autocomplete = ({ event }: any) => {
  const router = useRouter();
  const params = useParams();

  const options = event.map((event: any) => {
    return { value: event.id, label: event.title };
  });

  const handleChange = (selectedOption: any) => {
    if (selectedOption && selectedOption.value) {
      router.push(`/events/${selectedOption.value}`);
    }
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
