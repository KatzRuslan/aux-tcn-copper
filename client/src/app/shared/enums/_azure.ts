export enum WorkItemType {
    BUG = 'bug',
    REQUIREMENT = 'requirement',
    TASK = 'task'
};
export const WorkItemNames = new Map([
    [WorkItemType.BUG, 'Bug'],
    [WorkItemType.REQUIREMENT, 'Requirement'],
    [WorkItemType.TASK, 'Task'],
]);
