type ItemType = {
  id: string,
  name: string,
  points: number,
  total_match: number,
  total_win: number,
  total_draw: number,
  total_lose: number,
  gol_scores: number,
  gol_conceded: number
}

interface ItemPropsType {
  index: number,
  item: ItemType
}

export type { ItemType, ItemPropsType};