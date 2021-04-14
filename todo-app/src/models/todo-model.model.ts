import {Entity, model, property} from '@loopback/repository';

@model()
export class TodoModel extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  desc?: string;

  @property({
    type: 'boolean',
  })
  isComplete?: boolean;


  constructor(data?: Partial<TodoModel>) {
    super(data);
  }
}

export interface TodoModelRelations {
  // describe navigational properties here
}

export type TodoModelWithRelations = TodoModel & TodoModelRelations;
