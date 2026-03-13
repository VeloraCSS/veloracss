const STRING_OPTION = 3;

export const trackerCommandRegistry = Object.freeze([
  {
    name: 'tracked-item-create',
    description: 'Create a tracked GitHub Project item from Discord.',
    options: [
      {
        type: STRING_OPTION,
        name: 'title',
        description: 'Short task title.',
        required: true
      },
      {
        type: STRING_OPTION,
        name: 'priority',
        description: 'Initial priority value.',
        required: false
      },
      {
        type: STRING_OPTION,
        name: 'notes',
        description: 'Optional project note.',
        required: false
      }
    ]
  },
  {
    name: 'tracked-item-status',
    description: 'Update the status of a tracked item.',
    options: [
      {
        type: STRING_OPTION,
        name: 'item-id',
        description: 'GitHub Project item node ID.',
        required: true
      },
      {
        type: STRING_OPTION,
        name: 'status',
        description: 'Target status value.',
        required: true
      }
    ]
  },
  {
    name: 'tracked-item-priority',
    description: 'Update the priority of a tracked item.',
    options: [
      {
        type: STRING_OPTION,
        name: 'item-id',
        description: 'GitHub Project item node ID.',
        required: true
      },
      {
        type: STRING_OPTION,
        name: 'priority',
        description: 'Target priority value.',
        required: true
      }
    ]
  },
  {
    name: 'tracked-item-note',
    description: 'Attach or replace the project note for a tracked item.',
    options: [
      {
        type: STRING_OPTION,
        name: 'item-id',
        description: 'GitHub Project item node ID.',
        required: true
      },
      {
        type: STRING_OPTION,
        name: 'notes',
        description: 'Structured project note text.',
        required: true
      }
    ]
  }
]);
