import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemRuleService implements InMemoryDbService {
  createDb() {
    const conventions = {
      id: 1,
      conditions: [
        { name: 'any', value: 0 },
        { name: 'all', value: 1 },
      ],
      fields: [
        { name: 'From', value: 0 },
        { name: 'To', value: 1 },
        { name: 'Subject', value: 2 },
        { name: 'Message', value: 3 },
        { name: 'Date Received', value: 4 }
      ],
      predicates: [
        { name: 'Contains', type: 0, value: 0 },
        { name: 'Not Contains', type: 0, value: 1 },
        { name: 'Equal to', type: 0, value: 2 },
        { name: 'Not Equal to', type: 0, value: 3 },
        { name: 'Less than', type: 1, value: 4 },
        { name: 'Greater than', type: 1, value: 5 }
      ],
      actions: [
        { name: 'Mark as Read', type: 0, value: 0 },
        { name: 'Mark as Unread', type: 0, value: 1 },
        { name: 'Move to', type: 1, value: 2 },
        { name: 'Forward to', type: 1, value: 3 },
        { name: 'Add Label', type: 1, value: 4 },
        { name: 'Archive Message', type: 0, value: 5 },
      ],
      dates: [
        { name: '1 day', value: 1 },
        { name: '3 days', value: 3 },
        { name: '1 week', value: 7 },
        { name: '2 weeks', value: 14 },
        { name: '1 month', value: 30 },
        { name: '2 months', value: 60 },
        { name: '6 months', value: 180 },
        { name: '1 year', value: 365 },
      ]
    };
    const rules = [
      {
        id: 1,
        name: 'Rule A',
        condition: 0,
        conditions: [
          { field: 1, predicate: 0, value: 'balu.sekar@fourkites.com' }
        ],
        actions: [
          { action: 2, type: 1, value: 'letbaluhear@gmail.com' }
        ]
      },
      {
        id: 2,
        name: 'Rule B',
        condition: 1,
        conditions: [
          { field: 1, predicate: 0, value: 'balu.sekar@fourkites.com' },
          { field: 2, predicate: 0, value: 'balu.sekar@fourkites.com' }
          // { field: 3, predicate: 2, value: 30 }
        ],
        actions: [
          { action: 2, type: 1, value: 'letbaluhear@gmail.com' },
          { action: 4, type: 1, value: 'Testing' },
        ]
      },
      {
        id:3,
        name: 'Rule C',
        condition: 0,
        conditions: [
          { field: 0, predicate: 0, value: 'test123@gmail.com' },
          { field: 1, predicate: 0, value: 'myself@gmail.com' },
          { field: 2, predicate: 0, value: 'Testing' }
        ],
        actions: [
          { action: 0, type: 0 },
          { action: 5, type: 0 },
          { action: 4, type: 1, value: 'Testing' }
        ]
      },
      {
        id: 4,
        name: 'Rule D',
        condition: 0,
        conditions: [
          { field: 0, predicate: 0, value: 'test123@gmail.com' },
          { field: 1, predicate: 0, value: 'myself@gmail.com' },
          { field: 2, predicate: 0, value: 'Testing' },
          { field: 3, predicate: 2, value: 14 }
        ],
        actions: [
          { action: 0, type: 0 },
          { action: 5, type: 0 },
          { action: 4, type: 1, value: 'Testing' },
          { action: 3, type: 1, value: 'testing@123@gmail.com' }
        ]
      },
      {
        id: 5,
        name: 'Rule E',
        condition: 1,
        conditions: [
          { field: 1, predicate: 0, value: 'balu.sekar@fourkites.com' }
        ],
        actions: [
          { action: 2, type: 1, value: 'letbaluhear@gmail.com' }
        ]
      },
      {
        id: 6,
        name: 'Rule F',
        condition: 0,
        conditions: [
          { field: 1, predicate: 0, value: 'balu.sekar@fourkites.com' }
        ],
        actions: [
          { action: 2, type: 1, value: 'letbaluhear@gmail.com' }
        ]
      },
      {
        id: 7,
        name: 'Rule G',
        condition: 1,
        conditions: [
          { field: 1, predicate: 0, value: 'balu.sekar@fourkites.com' },
          { field: 2, predicate: 0, value: 'balu.sekar@fourkites.com' }
          // { field: 3, predicate: 2, value: 30 }
        ],
        actions: [
          { action: 2, type: 1, value: 'letbaluhear@gmail.com' },
          { action: 4, type: 1, value: 'Testing' },
        ]
      },
      {
        id: 8,
        name: 'Rule H',
        condition: 0,
        conditions: [
          { field: 0, predicate: 0, value: 'test123@gmail.com' },
          { field: 1, predicate: 0, value: 'myself@gmail.com' },
          { field: 2, predicate: 0, value: 'Testing' }
        ],
        actions: [
          { action: 0, type: 0 },
          { action: 5, type: 0 },
          { action: 4, type: 1, value: 'Testing' }
        ]
      },
      {
        id: 9,
        name: 'Rule I',
        condition: 0,
        conditions: [
          { field: 0, predicate: 0, value: 'test123@gmail.com' },
          { field: 1, predicate: 0, value: 'myself@gmail.com' },
          { field: 2, predicate: 0, value: 'Testing' },
          { field: 3, predicate: 2, value: 14 }
        ],
        actions: [
          { action: 0, type: 0 },
          { action: 5, type: 0 },
          { action: 4, type: 1, value: 'Testing' },
          { action: 3, type: 1, value: 'testing@123@gmail.com' }
        ]
      },
      {
        id: 10,
        name: 'Rule J',
        condition: 1,
        conditions: [
          { field: 1, predicate: 0, value: 'balu.sekar@fourkites.com' }
        ],
        actions: [
          { action: 2, type: 1, value: 'letbaluhear@gmail.com' }
        ]
      },
      {
        id: 11,
        name: 'Rule K',
        condition: 0,
        conditions: [
          { field: 1, predicate: 0, value: 'balu.sekar@fourkites.com' }
        ],
        actions: [
          { action: 2, type: 1, value: 'letbaluhear@gmail.com' }
        ]
      },
      {
        id: 12,
        name: 'Rule L',
        condition: 1,
        conditions: [
          { field: 1, predicate: 0, value: 'balu.sekar@fourkites.com' },
          { field: 2, predicate: 0, value: 'balu.sekar@fourkites.com' }
          // { field: 3, predicate: 2, value: 30 }
        ],
        actions: [
          { action: 2, type: 1, value: 'letbaluhear@gmail.com' },
          { action: 4, type: 1, value: 'Testing' },
        ]
      },
      {
        id: 13,
        name: 'Rule M',
        condition: 0,
        conditions: [
          { field: 0, predicate: 0, value: 'test123@gmail.com' },
          { field: 1, predicate: 0, value: 'myself@gmail.com' },
          { field: 2, predicate: 0, value: 'Testing' }
        ],
        actions: [
          { action: 0, type: 0 },
          { action: 5, type: 0 },
          { action: 4, type: 1, value: 'Testing' }
        ]
      },
      {
        id: 14,
        name: 'Rule N',
        condition: 0,
        conditions: [
          { field: 0, predicate: 0, value: 'test123@gmail.com' },
          { field: 1, predicate: 0, value: 'myself@gmail.com' },
          { field: 2, predicate: 0, value: 'Testing' },
          { field: 3, predicate: 2, value: 14 }
        ],
        actions: [
          { action: 0, type: 0 },
          { action: 5, type: 0 },
          { action: 4, type: 1, value: 'Testing' },
          { action: 3, type: 1, value: 'testing@123@gmail.com' }
        ]
      },
      {
        id: 15,
        name: 'Rule O',
        condition: 1,
        conditions: [
          { field: 1, predicate: 0, value: 'balu.sekar@fourkites.com' }
        ],
        actions: [
          { action: 2, type: 1, value: 'letbaluhear@gmail.com' }
        ]
      }
    ];
    return { conventions, rules };
  }
}
