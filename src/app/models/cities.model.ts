import { City } from './city.model';
export interface CitiesResult {
  totalPages: number
  totalElements: number
  pageable: Pageable
  first: boolean
  last: boolean
  size: number
  content: City[]
  number: number
  numberOfElements: number
  empty: boolean
}

export interface Pageable {
  pageNumber: number
  pageSize: number
  sort: Sort
  offset: number
  paged: boolean
  unpaged: boolean
}

export interface Sort {
  sorted: boolean
  empty: boolean
  unsorted: boolean
}

