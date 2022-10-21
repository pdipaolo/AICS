import { ImageType } from "utils/getImage";

type SponsorProps = {
  sponsorItems: sponsorItems;
};

type sponsorItems = {
  id: string | number,
  link: string,
  item: Item,
  descriptionItem: descriptionItem
};
type Item = {
  title: string,
  subtitle: string,
  image: ImageType,
  style: SponsorStyle,
  textStyle: textStyle
}

type descriptionItem = {
  text: string,
  style: SponsorStyle,
  textStyle: textStyle
};

type SponsorStyle = {
  backgroundColor: string,
  borderColor:  string,
};

type textStyle = {
  color: string | number,
}
export type { SponsorProps, descriptionItem, Item, SponsorStyle};