'use client';

import Lottie from 'lottie-react';

interface Props {
  path: string;
}

const LottieAnimation = ({ path }: Props) => {
  return <Lottie animationData={require(`@/public${path}`)} loop autoplay />;
};

export default LottieAnimation;
