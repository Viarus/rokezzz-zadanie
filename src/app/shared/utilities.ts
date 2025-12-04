export type imgElement = {
  src: string;
  alt: string;
};

const photoPrefix = '/assets/images/';
const photoPostfix = '.png';
export const photoPathBuilder = (name: string) => photoPrefix + name + photoPostfix;
