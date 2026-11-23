import { Request, Response } from 'express';

export const getWorkspaceSummary = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json({
    success: true,
    data: {
      metrics: {
        totalProjects: 4,
        totalTasks: 48,
        completedTasks: 31,
        averageVelocityPoints: 34,
        activeSprints: 1,
        teamMembersCount: 12
      },
      statusDistribution: {
        backlog: 6,
        todo: 10,
        inProgress: 12,
        inReview: 8,
        done: 12
      },
      workloadDistribution: [
        { member: 'Tharun M.', points: 18, tasks: 5 },
        { member: 'Sarah Lin', points: 14, tasks: 4 },
        { member: 'Alex Rivera', points: 10, tasks: 3 },
        { member: 'David Kim', points: 6, tasks: 2 }
      ]
    }
  });
};
