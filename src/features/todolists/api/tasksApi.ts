import { instance } from "@/common/instance"
import { DomainTask, GetTasksResponse, UpdateTaskModel } from "@/features/todolists/api/tasksApi.types.ts"
import { BaseResponse } from "@/common/types"

export const tasksApi = {
  getTasks(todolistId: string) {
    return instance.get<GetTasksResponse>(`/todo-lists/${todolistId}/tasks`)
  },
  createTasks({ todolistId, title }: { todolistId: string; title: string }) {
    return instance.post<BaseResponse<{ item: DomainTask }>>(`/todo-lists/${todolistId}/tasks`, { title })
  },
  changeTask({ todolistId, taskId, model }: { todolistId: string; taskId: string; model: UpdateTaskModel }) {
    return instance.put<BaseResponse<{ item: DomainTask }>>(`/todo-lists/${todolistId}/tasks/${taskId}`, model)
  },
  deleteTask({ todolistId, taskId }: { todolistId: string; taskId: string }) {
    return instance.delete<GetTasksResponse>(`/todo-lists/${todolistId}/tasks/${taskId}`)
  },
}
