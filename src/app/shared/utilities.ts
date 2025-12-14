export type imgElement = {
  ngSrc: string;
  alt: string;
  width: string;
  height: string;
};

const photoPrefix = '/assets/images/';
const photoPostfix = '.png';
export const photoPathBuilder = (name: string) => photoPrefix + name + photoPostfix;
