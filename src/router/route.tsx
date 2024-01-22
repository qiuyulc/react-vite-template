import React from 'react';

const modules = import.meta.glob('@/views/**');

const Model = (link: string) => {
  let Com = null;
  if (link) {
    const URL = '/src/views/' + link + '/index.tsx';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
    Com = React.lazy(modules[URL] as any);
    return <>{Com ? <Com /> : ''}</>;
  } else {
    return <></>;
  }
};
export default Model;
