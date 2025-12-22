import { ChakraProvider } from '@chakra-ui/react';

import { ScheduleProvider } from '@/contexts/ScheduleContext';
import ScheduleDndProvider from '@/contexts/ScheduleDndProvider';
import { ScheduleTables } from '@/components/schedule/ScheduleTables';

function App() {
  return (
    <ChakraProvider>
      <ScheduleProvider>
        <ScheduleDndProvider>
          <ScheduleTables />
        </ScheduleDndProvider>
      </ScheduleProvider>
    </ChakraProvider>
  );
}

export default App;
