import Image from 'next/image';
import { format } from 'date-fns';

import logo from '@/assets/logo.png';

const HeaderPage = () => {
  return (
    <div className="text-center py-8 space-y-4">
      <Image
        src={logo}
        alt="logoimage"
        width={300}
        height={200}
        className="mx-auto"
      />
      <p> Journalism Without Fear or Favour </p>
      <p> {format(new Date(), 'EEEE, MMM dd  , YYY')}</p>
    </div>
  );
};

export default HeaderPage;
