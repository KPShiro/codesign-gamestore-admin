type Feature = 'Game';
type Action = 'Create' | 'Read' | 'Update' | 'Delete';

export type Permission = `${Feature}.${Action}`;
