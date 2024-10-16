import request from 'supertest'
import { app } from './server'
import * as createTodoModule from '../functions/create-todo'
import * as updateTodoModule from '../functions/update-todo'
import * as deleteTodoModule from '../functions/delete-todo'
import * as completeTodoModule from '../functions/complete-todo'

jest.mock('../functions/create-todo')
jest.mock('../functions/update-todo')
jest.mock('../functions/delete-todo')
jest.mock('../functions/complete-todo')

describe('routes test', () => {
    const server = app.server

    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should list all todos', async () => {
        const response = await request(server).get('/tasks')
        
        expect(response.statusCode).toBe(200)
        expect(response.body).toHaveProperty('data')
    })

    it('should create todo', async () => {
        const createTodoMock = createTodoModule.createTodo as jest.Mock;
        createTodoMock.mockResolvedValue({
            todo: {
                id: '1',
                title: 'test title',
                description: 'test description',
                isCompleted: false,
                createdAt: new Date()
            }
        });

        const response = await request(server).post('/tasks').send({
            title: 'test title',
            description: 'test description'
        })

        expect(response.statusCode).toBe(201)
        expect(createTodoModule.createTodo).toHaveBeenCalled()
        expect(response.body).toHaveProperty('todo')
    })

    it('should update todo by id', async () => {
        const updateTodoMock = updateTodoModule.updateTodo as jest.Mock;
        updateTodoMock.mockResolvedValue({
            todo: {
                id: '1',
                title: 'test title',
                description: 'test description',
                isCompleted: true || false,
                createdAt: new Date()
            }
        });
        
        const response = await request(server).put('/tasks/1').send({
            title: 'test title',
            description: 'test description'
        })
    
        expect(response.statusCode).toBe(200)
        expect(updateTodoModule.updateTodo).toHaveBeenCalled()
    })

    it('should delete todo by id', async () => {
        const deleteTodoMock = deleteTodoModule.deleteTodo as jest.Mock;
        deleteTodoMock.mockResolvedValue(undefined)

        const response = await request(server).delete('/tasks/1')

        expect(response.statusCode).toBe(200)
        expect(deleteTodoModule.deleteTodo).toHaveBeenCalled()
    })

    it('should complete todo', async () => {
        const completeTodoMock = completeTodoModule.completeTodo as jest.Mock;
        completeTodoMock.mockResolvedValue({
            todo: {
                id: '1',
                title: 'test title',
                description: 'test description',
                isCompleted: true,
                createdAt: new Date()
            }
        });

        const response = await request(server).patch('/tasks/1/complete')

        expect(response.statusCode).toBe(200)
        expect(completeTodoModule.completeTodo).toHaveBeenCalled()
    })
})