export interface PhotoResult {
  totalPages: number
  totalElements: number
  size: number
  content: Content[]
  number: number
  sort: Sort
  pageable: Pageable
  numberOfElements: number
  first: boolean
  last: boolean
  empty: boolean
}

export interface Content {
  id: number
  photoName: string
  photoUrl: string
}

export interface Sort {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}

export interface Pageable {
  offset: number
  sort: Sort
  pageNumber: number
  pageSize: number
  paged: boolean
  unpaged: boolean
}
