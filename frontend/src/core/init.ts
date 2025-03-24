import { MetadataCache, Vault, TFile } from "obsidian";
import { getAllMarkdownFiles, readFile } from "src/utils/fileUtils";

export async function createVaultPayload(vault: Vault): Promise<Object> {
	const allMarkdownFiles: TFile[] = getAllMarkdownFiles(vault);
	const vaultData: Object[] = [];

	for (const file of allMarkdownFiles) {
		const fileContent = await readFile(vault, file);

		vaultData.push({
			filename: file.name,
			path: file.path,
			content: fileContent,
			stat: file.stat,
		});
	}

	return { files: vaultData };
}
