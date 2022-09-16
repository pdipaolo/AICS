type ItemType = {
  id: string,
  name: string,
  total_match: number,
  points: number,
  gol_scores: number,
  gol_conceded: number
}

interface ItemPropsType extends ItemType {
  index: number
}

export type { ItemType, ItemPropsType};