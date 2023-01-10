export interface Response<T> {
    message?: string,
    data: T,
    created_at?: string
}