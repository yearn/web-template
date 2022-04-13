import {LinearClient} from '@linear/sdk';
import type {NextApiRequest, NextApiResponse} from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse): Promise<void> {
	if (!process.env.USE_FEEDBACKS) {
		res.status(200).end();
		return;
	}
	const	client = new LinearClient({accessToken: process.env.LINEAR_OAUTH_TOKEN});
	const	feedbackType = req.body.feedbackType === 'issue' ? '❗️' : req.body.feedbackType === 'idea' ? '💡' : '💭';
	await client.issueCreate({
		teamId: process.env.LINEAR_TEAM_ID as string,
		title: `${feedbackType} - [${process.env.LINEAR_PROJECT_NAME}] ${req.body.message.slice(0, 20)} ${req.body.message.length > 20 ? '...' : ''}`,
		description: req.body.message
	});
	res.status(200).end();
}
