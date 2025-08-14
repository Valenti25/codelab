export interface IBaseFilter {
    page: number;
    limit: number;
    sort: string;
    orderBy: 'asc' | 'desc';
    search: string;
}

export interface PaginatedResult<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}