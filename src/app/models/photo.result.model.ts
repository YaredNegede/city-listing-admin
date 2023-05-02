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
  sort: Sort2
  pageNumber: number
  pageSize: number
  paged: boolean
  unpaged: boolean
}

export interface Sort2 {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}
