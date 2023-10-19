import { Suspense } from 'react';

const LazyBoundary = (WrapComp) => (
  <Suspense fallback={<div>loading....</div>}>
    <WrapComp />
  </Suspense>
);

export default LazyBoundary;
