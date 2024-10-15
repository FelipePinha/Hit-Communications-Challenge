export interface CreateTodoRequest {
    title: string
    description: string
}

export interface UpdateTodoRequest {
    id: string
    title: string
    description: string
}

export interface DeleteTodoRequest {
    id: string
}