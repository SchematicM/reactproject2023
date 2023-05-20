export interface IPagination<T> {
    page: number,
    results: T[];
    total_pages:number,
}