export interface TodoRequest {
    title: string
    description: string
}

export interface UpdateTodoRequest {
    id: string
    title: string
    description: string
}