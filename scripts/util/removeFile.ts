import fs from 'fs';
import chalk from 'chalk';

export default async function removeFile(target: string) {
	try {
		return await fs.unlinkSync(target);
		// console.log(chalk.yellow(`Removed ${target}`));
	} catch (error) {
		console.log(chalk.red(`Error removing ${target}`));
	}
}
